import React from "react";
import { Route } from "react-router-dom"
import ChannelIndexContainer from "../channel/channel_index_container";
import ProfileContainer from "../profile/profile_container";
import ChannelContentContainer from "./channel_content_container"

class ServerContent extends React.Component{
    constructor(props){
        super(props);
        this.renderDeleteOrLeaveServer = this.renderDeleteOrLeaveServer.bind(this);
    }

    renderHeader() {
        const servers = this.props.servers
        if (servers.length === 0) {
            return ""
        } else {
            for (let server of servers) {
                if (server.id == this.props.match.params.serverId) {
                    return server.name
                }
            }
        }
    }

    renderDeleteOrLeaveServer() {
        const servers = this.props.servers
        let currentServer = "";
        if (servers.length === 0) {
            return <></>
        } else {
            for (let server of servers) {
                if (server.id == this.props.match.params.serverId) {
                    currentServer = server;
                }
            }
        }
        if(currentServer.owner_id === this.props.currentUserId){
            return <button onClick={() => this.deleteServer(currentServer)}>Delete {currentServer.name}</button>
        } else {
            return <button onClick={() => this.leaveServer(currentServer)}>Leave {currentServer.name}</button>
        }
    }

    deleteServer(server){
        this.props.deleteServer(server.id).then(() => this.props.history.push('/channel/@me'));
    }

    leaveServer(server){
        this.props.deleteMembership({ user_id: this.props.currentUserId, server_id: server.id }).then(() => this.props.history.push('/channel/@me'));
    }

    render(){
        const serverName = this.renderHeader();
        return(
            <div className="server-container">
                <div className="channel-section-container">
                    <div className="server-header">
                        <span>{serverName}</span>
                        <img src={window.down_arrow} width="10" height="10" />
                    </div>
                    <div className="channel-index-container">
                        <div className="remove-server-button">
                            {this.renderDeleteOrLeaveServer()}
                        </div>
                        <ChannelIndexContainer />
                    </div>
                    <div className="profile-container">
                        <ProfileContainer />
                    </div>
                </div>
                <Route path="/channel/:serverId/:channelId" component={ChannelContentContainer} />
            </div>
        )
    }
}

export default ServerContent;