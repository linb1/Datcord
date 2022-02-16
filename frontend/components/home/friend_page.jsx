import React from "react";
import FriendPageItemContainer from "./friend_page_item_container";
class FriendPage extends React.Component{

    componentDidMount(){
        this.props.requestFriends()
    }

    render(){
        const friends = this.props.friends.map((friend, idx) => {
            return <li key={idx}>
                <FriendPageItemContainer friend={friend}/>
            </li>
        })
        return(
            <div className="friend-page-container">
                <div className="friend-header-container">
                    <div className="friend-page-header">
                        <div className="friend-page-title">
                            <img src={window.friend} width="20" height="20" />
                            <span>Friends</span>
                        </div>
                    </div>
                </div>
                <div className="friend-page-list-container">
                    <ul>
                        <div className="friend-page-list-header">
                            <h3>ALL FRIENDS -&nbsp;</h3>
                            <span>{this.props.friends.length}</span>
                        </div>
                        {friends}
                    </ul>
                </div>
            </div>
        )
    }

}

export default FriendPage;