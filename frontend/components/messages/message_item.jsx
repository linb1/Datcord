import React from "react"

const MessageItem = (props) => {
    // debugger
    const messageDate = new Date(props.message.created_at).toLocaleDateString();
    return(
        <div className="message-item-container">
            <div className="message-item-user-icon">
                <img src={window.default_user_icon} width="40" height="40" />
            </div>
            <div className="message-item-content-container">
                <div className="message-item-content-header">
                    <h3>{props.member.username}</h3>
                    <span>{messageDate}</span>
                </div>
                <div className="message-item-content-body">
                    <p>{props.message.body}
                    </p>
                </div>
            </div>
        </div>
    )
}


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        // senders: state.session.users
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         receiveMessage: (message) => dispatch(receiveMessage(message)),
//         requestChannel: (channelId) => dispatch(requestChannel(channelId)),
//     };
// }

export default withRouter(connect(mapStateToProps, null)(MessageItem));