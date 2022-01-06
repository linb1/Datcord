import React from 'react';
import ServerContainer from '../server/server_index_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import Channel from '../channel/channel';
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout } = this.props;
        const display = currentUser ? (
            <div>
                <p>home</p>
                <p>Hello, {currentUser.username}</p>
                <button onClick={logout}>Log Out</button>
            </div>
        ) : (
            <div>
                <p>home</p>
                <p>no user logged in</p>
            </div>
        );
        return (
            <div>
                {display}
            </div>
        )
    }
}


export default Home;