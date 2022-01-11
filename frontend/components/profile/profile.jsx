import React from 'react';
import ServerContainer from '../server/server_index_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import Channel from '../channel/channel_index';
class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount(){
    //     this.props.resetUserState(this.props.current_user_id)
    //     this.props.requestFriends()
    // }

    render() {
        const { currentUser, logout } = this.props;
        const display = currentUser ? (
            <div className='profile-content'>
                <div className='profile-left'>
                    <img src={window.default_user_icon} width="32" height="32" />
                    <div className='profile-user'>
                        <span>{currentUser.username}</span>
                        <p>#tag</p>
                    </div>
                </div>
                <button onClick={logout}>Log Out</button>
            </div>
        ) : (
            <div>
                <p>no user logged in</p>
            </div>
        );
        return (
            <div className='profile'>
                {display}
            </div>
        )
    }
}


export default Profile;