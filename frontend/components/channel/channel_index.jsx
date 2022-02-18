import React from "react"
import ChannelFormContainer from "./channel_form_container"
import ChannelIndexItemContainer from "./channel_index_item_container"
import {Route} from "react-router-dom"
import CreateChannelButton from "./createChannelButton"
class ChannelIndex extends React.Component{

    componentDidMount(){
        this.props.requestServer(this.props.match.params.serverId)
    }

    componentWillUnmount() {
        this.props.clearChannelsFromState();
    }

    render(){
        // debugger;
        const channels = this.props.channels.map((channel, idx) => {
            return <li key={idx}><ChannelIndexItemContainer channel={channel} idx={idx}/></li>
        })
        return(
            <div className="channel-index">
                <div className="channel-index-header">
                    <div className="channel-index-header-content">
                        <div className="channel-index-header-title">
                            <img src={window.down_arrow} width="7" height="7" />
                            <span>TEXT CHANNELS</span>
                        </div>
                        <div className="channel-index-header-plus">
                            {/* <span>+</span> */}
                            <CreateChannelButton/>
                        </div>
                    </div>
                </div>
                <div className="channel-list-container">
                    <ul>
                        {channels}
                    </ul>
                </div>
                {/* <ChannelFormContainer/> */}
            </div>
        )
    }
}

export default ChannelIndex;