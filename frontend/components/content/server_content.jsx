import React from "react";
import ChannelIndexContainer from "../channel/channel_index_container";
import MemberIndexContainer from "../members/member_index_container"
class ServerContent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <ChannelIndexContainer />
                <MemberIndexContainer />
            </div>
        )
    }
}

export default ServerContent;