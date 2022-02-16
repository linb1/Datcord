import React from "react"
import { Link } from "react-router-dom"

class FriendIndex extends React.Component{

    constructor(props){
        super(props)
        this.getDmMessages = this.getDmMessages.bind(this)
    }

    componentDidMount() {
        this.props.resetUserState(this.props.currentUserId)
        // this.props.requestFriends()
    }

    getDmMessages(dmId){
        this.props.resetUserState(this.props.currentUserId)
        this.props.requestDm(dmId)
    }

    render(){
        const friends = this.props.dms.map((dm,idx) => {
            return <li key={idx} onClick={() => this.getDmMessages(dm.id)}>
                    <Link to={`/channel/@me/${dm.id}`}>
                        <img src={window.default_user_icon} width="32" height="32" />
                        <span>
                            {dm.friend.username}
                        </span>
                    </Link>
                </li>
        })

        const seeFriends = (
            <li className="see-friend">
                <Link to={`/channel/@me/`}>
                    <img src={window.friend} width="20" height="20" />
                    <span>
                        Friends
                    </span>
                </Link>
            </li>
        )

        const directMessage = (
            <div className="friend-list-dm-header">
                <span>DIRECT MESSAGES</span>
                <span className="dm-plus">+</span>
            </div>
        )

        return (
            <div className="friend-list-container">
                <ul>
                    {seeFriends}
                    {directMessage}
                    {friends}
                </ul>
            </div>
        );
    }
}

export default FriendIndex