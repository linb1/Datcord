import React from "react";
import {Link} from "react-router-dom"

class ServerIndexItem extends React.Component{

    // componentDidMount(){
    //     this.props.clearChannelsFromState()
    //     this.props.requestServer(this.props.server.id)
    // }

    deleteServer(){
        this.props.deleteServer(this.props.server.id).then(() => this.props.history.push('/channel/@me'));
    }

    leaveServer(){
        this.props.deleteMembership({user_id: this.props.current_user_id, server_id: this.props.server.id})
    }

    fetchChannel(){
        this.props.resetUserState(this.props.current_user_id)
        this.props.clearChannelsFromState()
        this.props.requestServer(this.props.server.id)
    }

    deleteOrLeaveServer(){
        if(this.props.server.owner_id === this.props.current_user_id){
            return (
                <button onClick={this.deleteServer.bind(this)}>Delete {this.props.server.name}</button>
            )
        } else {
            return (
                <button onClick={this.leaveServer.bind(this)}>Leave {this.props.server.name}</button>
            )
        }
    }

    createAcronymDefaultIcon(serverName){
        const nameArray = serverName.split(" ");
        let icon = "";
        nameArray.forEach(word => {
            const char = word[0];
            icon += char;
        });
        return icon;
    }

    renderError() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){
        const channelId = Object.values(this.props.server.channels)[0].id
        const icon = this.createAcronymDefaultIcon(this.props.server.name)
        return(
            <div className="server-list-item-container">
                    <Link to={`/channel/${this.props.server.id}/${channelId}`} onClick={this.fetchChannel.bind(this)}>
                        <div className="server-list-item">
                            <span>{icon}</span>
                        </div>
                    </Link>
                {/* <button onClick={this.deleteServer.bind(this)}>Delete {this.props.server.name}</button> */}
                {/* {this.deleteOrLeaveServer()} */}
            </div>
        );
    }
}

export default ServerIndexItem