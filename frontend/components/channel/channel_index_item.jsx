import React from "react";
import {Link} from "react-router-dom"
class ChannelIndexItem extends React.Component {


    render() {
        // debugger;
        return (
            <div id="channel-index-item-content-container">
                <Link to={`/channel/${this.props.current_server_id}/${this.props.channel.id}`}>
                    <div id="channel-index-item-content">
                        <img src={window.hashtag} width="15" height="15" />
                        {this.props.channel.name}
                    </div>
                </Link>
            </div>
        );
    }
}

export default ChannelIndexItem