import React from "react";
import {Link} from "react-router-dom"
const FriendPageItem = ({friend}) => {

    const unfriendUser = (e) => {
        e.preventDefault();
        console.log(friend.username)
    }

    return(
        <div className="friend">
            <Link to={`/channel/@me/${friend.id}`} className="friend-link">
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
                    <div className="friend-option message">
                        <Link to={`/channel/@me/${friend.id}`}>
                            <img src={window.message}/>
                        </Link>
                    </div>
                    <div className="friend-option unfriend" onClick={unfriendUser}>
                        <img src={window.bin} />
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default FriendPageItem;