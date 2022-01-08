import React from "react";
import HomeContainer from "./../home/home_container"
import { Route, Switch, Redirect } from 'react-router-dom';
import ServerIndexContainer from '../server/server_index_container';
import ChannelIndexContainer from "../channel/channel_index_container";
import ChannelContent from "../content/channel_content";
class Main extends React.Component{

    render(){
        return(
            <div>
                This is the main page that holds everything (should always have servers showing)
                <ServerIndexContainer/>
                {/* <Route path="/channel/:serverId" component={ServerIndexContainer}/> */}
                <Switch>
                    <Route exact path="/channel/@me" component={HomeContainer} />
                    <Route path="/channel/:serverId" component={ChannelIndexContainer} />
                    {/* <Route path="/channel/:serverId/:channelId" component={ChannelContent} />  */}
                </Switch>
            </div>
        ) 

    }
}

export default Main