import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {currentUser, logout} = this.props;
        const splashButton = header => currentUser ? (
                <Link to="/@me">Enter Datcord</Link>
        ) : (
            header ? (<Link to="/login">Log In</Link>) : (<Link to="/signup">Sign Up</Link>)
        );
        return (
            <div className='splash'>
                <div className='splash-banner'>
                    <header className='splash-header'>
                        <div className='splash-container'>
                            <div className='splash-logo'>
                                <div>Datcord</div>
                            </div>
                            <nav className='navbar'>
                                <ul>
                                    <li>github</li>
                                    <li>linkedin</li>
                                </ul>
                            </nav>
                            {splashButton(true)}    
                        </div>
                    </header>
                </div>
                <p>Splash</p>
                {splashButton(false)}
            </div>
        )
    }
}

export default Splash;