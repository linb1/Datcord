import React from "react";
import {Link} from "react-router-dom"
class ChannelIndexItem extends React.Component {


    render() {
        // debugger;
        return (
            <div>
                <Link to={`/channel/${this.props.current_server_id}/${this.props.channel.id}`}>{this.props.channel.name}</Link>
            </div>
        );
    }
}

export default ChannelIndexItem