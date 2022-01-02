import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../app/assets/images/logo.png';
import splashright from '../../../app/assets/images/splash-right.svg';
import splashleft from '../../../app/assets/images/splash-left.svg';
import splashBackground from '../../../app/assets/images/splash-background.svg';
import splashSection1 from '../../../app/assets/images/splash-section-1.svg';
import splashSection2 from '../../../app/assets/images/splash-section-2.svg';
import splashSection3 from '../../../app/assets/images/splash-section-3.svg';

class Splash extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {currentUser, logout} = this.props;
        const splashButton = header => currentUser ? (
                <Link className="splash-button" to="/@me">Open Datcord</Link>
        ) : (
                header ? (<Link className="splash-button" to="/login">Login</Link>) : (<Link className="splash-button" to="/signup">Sign up</Link>)
        );
        return (
            <div className='splash'>
                <header className='splash-header'>
                    <div className='splash-container'>
                        <div className='splash-logo'>
                            <img src={logo} width="31" height="24"/>
                            <span>Datcord</span>
                        </div>
                        <nav className='navbar'>
                            <ul>
                                <li>Github</li>
                                <li>LinkedIn</li>
                            </ul>
                        </nav>
                        <div className='splash-button-container'>
                            {splashButton(true)}    
                        </div>
                    </div>
                </header>
                <div className='splash-banner'>
                    <img className="splash-background" src={splashBackground} />
                    <img className="splash-toon-right" src={splashright}/>
                    <img className="splash-toon-left" src={splashleft} />
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
                                <img className="splash-section-1-img" src={splashSection1} />
                            </div>
                            <div className="splash-section-content">
                                <h2>Create an invite-only place where you belong</h2>
                                <p>Discord servers are organized into topic-based 
                                    channels where you can collaborate, share, and 
                                    just talk about your day without clogging up a group chat.</p>
                            </div>
                        </div>
                    </div>
                    <div className='splash-section-2'>
                        <div className='splash-section-container'>
                            <div className="splash-section-content">
                                <h2>Where hanging out is easy</h2>
                                <p>Grab a seat in a voice channel when you're free. 
                                    Friends in your server can see you're around and 
                                    instantly pop in to talk without having to call.</p>
                            </div>
                            <div className='splash-section-img-container'>
                                <img className="splash-section-2-img" src={splashSection2} />
                            </div>
                        </div>
                    </div>
                    <div className='splash-section-3'>
                        <div className='splash-section-container'>
                            <div className='splash-section-img-container'>
                                <img className="splash-section-3-img" src={splashSection3} />
                            </div>
                            <div className="splash-section-content">
                                <h2>From few to a fandom</h2>
                                <p>Get any community running with moderation tools 
                                    and custom member access. Give members special powers, 
                                    set up private channels, and more.</p>
                            </div>
                        </div>
                    </div>
                    <div className='splash-section-4'>
                        
                    </div>
                    <footer className='footer'>
                        <div className='footer-container'>
                            <div className='footer-info-container'>
                                <span>placeholder left</span>
                                <span>placeholder right</span>
                            </div>
                            <div className='footer-ending'>
                                <div className='splash-logo'>
                                    <img src={logo} width="31" height="24" />
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