import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {currentUser, logout} = this.props;
        const display = header => currentUser ? (
            <div>
                <Link to="/home">Enter Datcord</Link>
            </div>
        ) : (
            header ? (<Link to="/login">Log In</Link>) : (<Link to="/signup">Sign Up</Link>)
        );
        return (
            <div>
                {display(true)}
                <p>Splash</p>
                {display(false)}
            </div>
        )
    }
}

export default Splash;