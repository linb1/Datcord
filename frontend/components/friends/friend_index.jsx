import React from "react"
import { Link } from "react-router-dom"

class FriendIndex extends React.Component{

    componentDidMount() {
        this.props.resetUserState(this.props.current_user_id)
        this.props.requestFriends()
    }

    render(){
        const friends = this.props.friends.map((friend,idx) => {
            return <li key={idx}>
                    <Link to={`/channel/@me/${friend.id}`}>
                        <img src={window.default_user_icon} width="32" height="32" />
                        <span>
                            {friend.username}
                        </span>
                    </Link>
                </li>
        })
        return (
            <div className="friend-list-container">
                <ul>
                    {friends}
                </ul>
            </div>
        );
    }
}

export default FriendIndex