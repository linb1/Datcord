import React from "react";
import {Link} from "react-router-dom"
class ChannelIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        // this.props.requestChannel(this.props.channel.id)
    }


    render() {
        // debugger;
        return (
            <div id="channel-index-item-content-container">
                <Link to={`/channel/${this.props.current_server_id}/${this.props.channel.id}`}>
                    <div id="channel-index-item-content">
                        <img src={window.hashtag} width="15" height="15" />
                        <span>{this.props.channel.name}</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default ChannelIndexItem