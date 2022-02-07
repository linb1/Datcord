import React from "react";
import FriendIndexContainer from "./../friends/friend_index_container";
import ProfileContainer from "../profile/profile_container";
class HomeContent extends React.Component{
    constructor(props){
        super(props);
        this.joinSeededServer = this.joinSeededServer.bind(this)
        this.joinedSeededServer = this.joinedSeededServer.bind(this)
    }

    joinSeededServer(e){
        e.preventDefault;
        const membership = {
            user_id: this.props.currentUserId,
            server_id: 1
        }
        this.props.createMembership(membership)
            .then(response => {
                this.props.requestServer(response.membership.server_id).then(response => {
                    let channelId = Object.values(response.server.channels)[0].id;
                    this.props.history.push(`/channel/${response.server.id}/${channelId}`)
                })
            })
    }

    redirectToSeededServer(server){
        let channelId = Object.values(server.channels)[0].id;
        this.props.history.push(`/channel/${server.id}/${channelId}`);
    }

    joinedSeededServer(){
        let servers = this.props.servers;
        const joinButton = (
            <button onClick={this.joinSeededServer}>Join the Demo Server!</button>
        )
        if (servers.length === 0){
            return joinButton;
        }

        for(let server of servers){
            if (server.id === 1){
                return <button onClick={() => this.redirectToSeededServer(server)}>Go to Demo Server!</button>
            }
        }
        return joinButton;
    }



    render(){
        const seededServerButton = this.joinedSeededServer();
        // debugger
        return(
            <div className="home-container">
                <div className="friend-section-container">
                    <div className="friend-header">
                        <span>Friends</span>
                    </div>
                    <div className="friend-index-container">
                        <FriendIndexContainer/>
                    </div>
                    <div className="profile-container">
                        <ProfileContainer />
                    </div>
                </div>
                {/* <div className="join-seeded-server-container">
                    <div className="join-seeded-server-header">
                        <span>Click the button to get started!</span>
                    </div>
                    <div className="join-seeded-server-button">
                        {seededServerButton}
                    </div>
                </div> */}
                <div className="dm-container">
                    <div className="dm-header-container">
                        <span>Friends</span>
                    </div>
                    <div className="dm-content">

                    </div>
                </div>
            </div>
        );
    }
}

export default HomeContent