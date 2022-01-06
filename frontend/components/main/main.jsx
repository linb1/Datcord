import React from "react";
import HomeContainer from "./../home/home_container"
import { Route, Switch, Redirect } from 'react-router-dom';
import ServerIndexContainer from '../server/server_index_container';
class Main extends React.Component{

    render(){
        return(
            <div>
                This is the main page that holds everything (should always have servers showing)
                <ServerIndexContainer/>
                <Switch>
                    <Route exact path="/channel/@me" component={HomeContainer} />
                    {/* <Route exact path="/channel/:serverId/:channelId" component={channel} /> */} 
                    {/* should route to the server's first channel */}
                </Switch>
            </div>
        ) 

    }
}

export default Main