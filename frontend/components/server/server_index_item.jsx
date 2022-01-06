import React from "react";
import {Link} from "react-router-dom"

class ServerIndexItem extends React.Component{


    deleteServer(){
        this.props.deleteServer(this.props.server.id).then(() => this.props.history.push('/channel/@me'));
    }
    render(){
        return(
            <div>
                <Link to={`/channel/${this.props.server.id}`}>{this.props.server.name}</Link>
                <button onClick={this.deleteServer.bind(this)}>Delete {this.props.server.name}</button>
            </div>
        );
    }
}

export default ServerIndexItem