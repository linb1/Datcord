import React from "react";
import {Link} from "react-router-dom"
const FriendPageItem = ({ friend, currentUserId, createDm, deleteFriendship, ownProps}) => {

    const unfriendUser = (e) => {
        e.stopPropagation()
        const friendship = {
            user_id: currentUserId,
            friend_id: friend.id
        }
        deleteFriendship(friendship)
    }

    const createConvo = () => {
        const newDm = {
            user_id: currentUserId,
            friend_id: friend.id,
            member_ids: [currentUserId, friend.id]
        }
        createDm(newDm).then(res => ownProps.history.push(`/channel/@me/${res.dm.id}`))
    }

    return(
        <div className="friend">
            <div className="friend-link" onClick={createConvo}>
                <div className="friend-info-container">
                    <img src={window.default_user_icon} width="32" height="32" />
                    <div className="friend-info">
                        <div className="friend-name">
                            <span>{friend.username}</span>
                            <span className="friend-tag">{friend.tag}</span>
                        </div>
                        <span>Friend</span>
                    </div>
                </div>
                <div className="friend-options-container">
                    <div className="friend-option message" onClick={createConvo}>
                        <img src={window.message}/>
                        <div className="hover-label">Message</div>
                        <div className="hover-triangle"></div>
                    </div>
                    <div className="friend-option unfriend" onClick={unfriendUser}>
                        <img src={window.bin} />
                        <div className="hover-label">Remove</div>
                        <div className="hover-triangle"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FriendPageItem;