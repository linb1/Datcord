import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {currentUser, logout} = this.props;
        const splashButton = header => currentUser ? (
                <Link className="splash-button" to="/channel/@me">Open Datcord</Link>
        ) : (
                header ? (<Link className="splash-button" to="/login">Login</Link>) : (<Link className="splash-button" to="/signup">Sign up</Link>)
        );
        return (
            <div className='splash'>
                <header className='splash-header'>
                    <div className='splash-container'>
                        <div className='splash-logo'>
                            <img src={window.logo} width="31" height="24"/>
                            <span>Datcord</span>
                        </div>
                        <nav className='navbar'>
                            <ul>
                                <li><a href="https://github.com/linb1/Datcord" target="_blank">Github</a></li>
                                <li><a href="https://www.linkedin.com/in/brian-lin-1590/" target="_blank">LinkedIn</a></li>
                            </ul>
                        </nav>
                        <div className='splash-button-container'>
                            {splashButton(true)}    
                        </div>
                    </div>
                </header>
                <div className='splash-banner'>
                    <img className="splash-background" src={window.splash_background} />
                    <img className="splash-toon-right" src={window.splash_right}/>
                    <img className="splash-toon-left" src={window.splash_left} />
                    <div className='splash-banner-content'>
                        <h1>IMAGINE A PLACE...</h1>
                        <p>...where you can belong to a school club, a gaming group, 
                            or a worldwide art community. Where just you and a handful 
                            of friends can spend time together. A place that makes it 
                            easy to talk every day and hang out more often.</p>
                    </div>
                </div>
                <div className='splash-sections'>
                    <div className='splash-section-1'>
                        <div className='splash-section-container'>
                            <div className='splash-section-img-container'>
                                <img className="splash-section-1-img" src={window.splash_section_1} />
                            </div>
                            <div className="splash-section-content">
                                <h2>Join the Datcord community where you belong</h2>
                                <p>Datcord is a Discord clone with user authentication,
                                    servers, channels, and instant messaging.</p>
                            </div>
                        </div>
                    </div>
                    <div className='splash-section-2'>
                        <div className='splash-section-container'>
                            <div className="splash-section-content">
                                <h2>Where hanging out is easy</h2>
                                <p>Join the public server or create your own
                                    server and channels! Chat with other members
                                    in real time!
                                </p>
                            </div>
                            <div className='splash-section-img-container'>
                                <img className="splash-section-2-img" src={window.splash_section_2} />
                            </div>
                        </div>
                    </div>
                    <div className='splash-section-3'>
                        <div className='splash-section-container'>
                            <div className='splash-section-img-container'>
                                <img className="splash-section-3-img" src={window.splash_section_3} />
                            </div>
                            <div className="splash-section-content">
                                <h2>From few to a fandom</h2>
                                <p>Expect more features and updates to be implemented soon!</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='splash-section-4'>
                        
                    </div> */}
                    <footer className='footer'>
                        <div className='footer-container'>
                            <div className='footer-info-container'>
                                <div className='info-1'>
                                    <h3>IMAGINE A PLACE</h3>
                                    <br/>
                                    <p>Disclaimer: Images used in Datcord are taken
                                        from the offical Discord website for the purpose
                                        of making an accurate clone. All credit belongs
                                        to discord
                                    </p>
                                </div>
                                <div className='info-list'>
                                    <h4>About me</h4>
                                    <ul>
                                        <li>From Queens, NY</li>
                                        <li>Aspiring Software Engineer</li>
                                        <li>I know how to play one song on the piano</li>
                                    </ul>
                                </div>
                                <div className='info-list'>
                                    <h4>Links</h4>
                                    <ul>
                                        <li><a href="https://github.com/linb1/Datcord" target="_blank">Github</a></li>
                                        <li><a href="https://www.linkedin.com/in/brian-lin-1590/" target="_blank">LinkedIn</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='footer-ending'>
                                <div className='splash-logo'>
                                    <img src={window.logo} width="31" height="24" />
                                    <span>Datcord</span>
                                </div>
                                <div className='splash-button-container'>
                                    {splashButton(false)}
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Splash;