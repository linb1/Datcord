import React from "react"
import ChannelFormContainer from "./channel_form_container"
import ChannelIndexItemContainer from "./channel_index_item_container"
import {Route} from "react-router-dom"
import ChannelContent from "./../content/channel_content"
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
            return <li key={idx}><ChannelIndexItemContainer channel={channel}/></li>
        })
        return(
            <div>
                channel index
                <ul>
                    {channels}
                </ul>
                <ChannelFormContainer/>
                <Route path="/channel/:serverId/:channelId" component={ChannelContent} /> 
                <span>-------------</span>
            </div>
        )
    }
}

export default ChannelIndex;