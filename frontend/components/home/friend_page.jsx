import React from "react";
import FriendPageItemContainer from "./friend_page_item_container";
class FriendPage extends React.Component{

    render(){
        const friends = this.props.friends.map((friend, idx) => {
            return <li key={idx}>
                <FriendPageItemContainer friend={friend}/>
            </li>
        })
        return(
            <div>
                <div className="friend-header-container">
                    <div className="friend-page-header">
                        <div className="friend-page-title">
                            Friends

                        </div>
                    </div>
                </div>
                <div className="friend-page-list-container">
                    <ul>
                        {friends}
                    </ul>
                </div>
            </div>
        )
    }

}

export default FriendPage;