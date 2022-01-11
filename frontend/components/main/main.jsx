import React from "react";
import { Route, Switch } from 'react-router-dom';
import ServerIndexContainer from '../server/server_index_container';
import HomeContent from "../content/home_content";
import HomeContentContainer from "../content/home_content_container"
import ServerContentContainer from "../content/server_content_container"
class Main extends React.Component{

    render(){
        return(
            <div className="main">
                <div className="server-index-container">
                    <ServerIndexContainer/>
                </div>
                <div className="content">
                    <Switch>
                        <Route exact path="/channel/@me" component={HomeContentContainer} />
                        <Route path="/channel/:serverId" component={ServerContentContainer} />
                    </Switch>
                </div>
            </div>
        ) 

    }
}

export default Main