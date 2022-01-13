import React from "react";
import { useState, useEffect, useRef } from 'react';

const MessageForm = (props) => {
    // debugger
    const [body, setBody] = useState("")

    const handleUpdate = (e) => {
        e.preventDefault;
        setBody(e.currentTarget.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (body){
            const message = {
                sender_id: props.current_user_id,
                body: body,
                messageable_type: "Channel",
                messageable_id: props.channel_id
            }
            props.chat.send(message)

            // props.receiveMessage(message);
        }
        setBody("");
    }

    return(
        <div className="message-form-input-container">
            <form onSubmit={handleSubmit} className="message-form">
                <input 
                type="text"
                value={body}
                onChange={handleUpdate}
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
        // channel_id: parseInt(ownProps.match.params.channelId),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        receiveMessage: (message) => dispatch(receiveMessage(message)),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));