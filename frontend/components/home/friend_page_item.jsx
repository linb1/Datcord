import React from "react";
import {Link} from "react-router-dom"
const FriendPageItem = ({ friend, current_user_id, createDm, currentDm, ownProps}) => {

    const unfriendUser = (e) => {
        e.preventDefault();
        console.log(friend.id)
        console.log(current_user_id)
    }

    const createConvo = () => {
        const newDm = {
            user_id: current_user_id,
            friend_id: friend.id,
            member_ids: [current_user_id, friend.id]
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
                        {/* <Link to={`/channel/@me/${friend.id}`} onClick={createConvo}> */}
                            <img src={window.message}/>
                        {/* </Link> */}
                    </div>
                    <div className="friend-option unfriend" onClick={unfriendUser}>
                        <img src={window.bin} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FriendPageItem;