import React from "react";
import {Link} from "react-router-dom"
const FriendPageItem = ({friend}) => {

    const unfriendUser = (e) => {
        e.preventDefault();
        console.log(friend.username)
    }

    return(
        <div className="friend">
            <Link to={`/channel/@me/${friend.id}`}>
                <div className="friend-name">
                    <span>{friend.username} </span>
                    <span>{friend.tag} </span>
                </div>
                <div className="friend-options">
                    <div className="friend-message">
                        <Link to={`/channel/@me/${friend.id}`}>
                            message
                        </Link>
                    </div>
                    <div className="friend-message" onClick={unfriendUser}>
                        unfriend
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default FriendPageItem;