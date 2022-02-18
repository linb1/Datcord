import React from "react";
import {Link} from "react-router-dom"
class ChannelIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.deleteCurrentChannel = this.deleteCurrentChannel.bind(this);
        this.deleteIfOwner = this.deleteIfOwner.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        // this.props.requestChannel(this.props.channel.id)
    }

    deleteCurrentChannel(){
        this.props.deleteChannel(this.props.channel.id).then(() => this.props.history.push(`/channel/${this.props.currentServerId}/${this.props.generalChannel.id}`))
    }

    deleteIfOwner(){
        if(!this.props.currentServer){
            return <></>
        }

        if(this.props.idx === 0){
            return <></>
        }

        if(this.props.currentServer.owner_id === this.props.currentUserId){
            return <img src={window.x_button} width="10" height="10" onClick={() => this.deleteCurrentChannel()} className="delete-channel"/>
        } else {
            return <></>
        }
    }


    render() {
        return (
            <div id="channel-index-item-content-container">
                <Link to={`/channel/${this.props.currentServerId}/${this.props.channel.id}`}>
                    <div id="channel-index-item-content">
                        <img src={window.hashtag} width="15" height="15" />
                        <span>{this.props.channel.name}</span>
                        {this.deleteIfOwner()}
                    </div>
                </Link>
            </div>
        );
    }
}

export default ChannelIndexItem