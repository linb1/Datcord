import React from "react";
import { useState, useEffect, useRef } from 'react';

const MessageForm = (props) => {
    // debugger
    const [body, setBody] = useState("")

    const handleUpdate = (e) => {
        e.preventDefault;
        setBody(e.currentTarget.value)
    };

    const currentChatType = () => {
        if (props.type === "channel") {
            return "Channel"
        } else {
            return "DirectMessage"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (body){
            const message = {
                sender_id: props.currentUserId,
                body: body,
                messageable_type: currentChatType(), //refactor
                messageable_id: props.chatId //refactor
            }
            props.chat.send(message)
        }
        setBody("");
    }

    // const channelName = () => { //refactor
    //     if(!props.channel){
    //         return "";
    //     } else {
    //         return props.channel.name;
    //     }
    // }

    return(
        <div className="message-form-input-container">
            <form onSubmit={handleSubmit} className="message-form">
                <input 
                type="text"
                value={body}
                onChange={handleUpdate}
                // placeholder={`Message #${channelName()}`} //refactor
                />
            </form>
        </div>
    )
}

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveMessage } from "../../actions/message_actions";
const mapStateToProps = (state, ownProps) => {
    return {
        // current_user_id: state.session.currentUserId,
        // channel: state.entities.channels[ownProps.match.params.channelId]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        receiveMessage: (message) => dispatch(receiveMessage(message)),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));