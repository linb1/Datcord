import React from "react";
import { useState, useEffect, useRef } from 'react';
import MessageForm from "./message_form";
import MessageItem from "./message_item";
const Chat = (props) => {
    // debugger
    const [chat, setChat] = useState(null)

    const currentChatId = () => {
        if (props.type === "channel") {
            return props.chatId.channelId
        } else {
            return props.chatId.dmId
        }
    }

        useEffect(() => {
            if (props.type === "channel"){
                props.requestChannel(props.chatId.channelId) //refactor
            } else {
                props.requestDm(props.chatId.dmId)
            }
            const chat = App.cable.subscriptions.create(
                { channel: "MessagesChannel", type: props.type, id: currentChatId()},
                {
                    received: (response) =>{
                        const { message } = response
                        props.receiveMessage(message)
                    }
                }
                )
            setChat(chat);
            return () => {
                chat.unsubscribe()
            }
        }, [currentChatId()])//refactor

    const messages = props.chatMessages.map((message, idx) => {
        let member = props.members[message.sender_id]
        if (!member) {
            return <span key={`loading-${idx}`}></span>
        } else { 
            return (
                <MessageItem key={message.id} message={message} member={member}/>
            );
        }   
    })

    const StartAtBottom = () => {
        const lastMessage = useRef();
        useEffect(() => lastMessage.current.scrollIntoView());
        return <div ref={lastMessage} key={`bottom`}/>;
    };

    return(
        <div className="chat-container">
            <div className="message-list-container">
                <div className="message-list">
                    {messages}
                    <StartAtBottom/>
                </div>
            </div>
            <div className="message-form-container">
                <MessageForm chat={chat} currentUserId={props.currentUserId} chatId={props.chatId.channelId} type={props.type}/>
            </div>
        </div>
    )
}

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveMessage, removeMessage } from "../../actions/message_actions";
import { requestChannel } from "../../actions/channel_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.currentUserId,
        chatId: ownProps.match.params,
        chatMessages: Object.values(state.entities.messages),
        members: state.entities.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        receiveMessage: (message) => dispatch(receiveMessage(message)),
        requestChannel: (channelId) => dispatch(requestChannel(channelId)),
        requestDm: (dmId) => dispatch(requestDm(dmId)),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));