import React from "react";
import Chat from "../messages/chat";
import MemberIndexContainer from "../members/member_index_container";
import { render } from "react-dom";


class ChannelContent extends React.Component{
    constructor(props){
        super(props);
        this.renderHeader = this.renderHeader.bind(this)
    }

    componentDidMount(){
        this.props.requestChannel(this.props.match.params.channelId)
    }


    renderHeader(){
        const channels = this.props.channels
        if (channels.length === 0) {
            return ""
        } else {
            for(let channel of channels){
                if(channel.id == this.props.match.params.channelId){
                    return channel.name
                }
            }
        }
    }

    render(){
        const channelName = this.renderHeader();
        return(
                <div className="channel-container">
                    <div className="channel-header">
                        <img src={window.hashtag} width="20" height="20" />
                        <span>{channelName}</span>
                    </div>
                    <div className="channel-content">
                        <div className="message-container">
                        <Chat channel_id={this.props.match.params.channelId}/> 
                        </div>
                        <div className="member-container">
                            <MemberIndexContainer />
                        </div>
                    </div>
                </div>
        )
    }
}

export default ChannelContent