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

    render(){
        // debugger;
        return(
            <div>
                <Link to={`/channel/${this.props.server.id}`} onClick={this.fetchChannel.bind(this)}>{this.props.server.name}</Link>
                {/* <button onClick={this.deleteServer.bind(this)}>Delete {this.props.server.name}</button> */}
                {this.deleteOrLeaveServer()}
            </div>
        );
    }
}

export default ServerIndexItem