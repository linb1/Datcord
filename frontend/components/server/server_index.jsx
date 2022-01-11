import React from "react"
import {Link} from "react-router-dom"
import ServerFormContainer from "./server_form_container"
import ServerIndexItemContainer from "./server_index_item_container";
import CreateServerButton from "./createServerButton";
class ServerIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestServers();
    }

    componentWillUnmount(){
        this.props.clearServersFromState();
    }

    renderError() { 
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){
        const server = this.props.servers.map((server, idx) => {
            return <li key={idx}><ServerIndexItemContainer current_user_id={this.props.current_user_id} server={server}/></li>
        })
        return (
            <div className="server-index-content">
                <div className="server-profile-container">
                    <Link to={`/channel/@me`}>
                        <div className="server-profile-icon">
                            <img src={window.discord_icon} width="32" height="32" />
                        </div>
                    </Link>
                </div>
                <div className="seperator">
                </div>
                <div className="server-index-list-container">
                    <ul>
                        {server}
                    </ul>
                    <CreateServerButton errors={this.props.errors}/>
                    {/* <div className="create-server-button-container">
                        <div className="create-server-button" onClick={openModal}>
                            <span>+</span>
                        </div>
                        <createServerModal showModal={showModal} setShowModal={setShowModal}/>
                    </div> */}
                        {/* <ServerFormContainer/> */}
                </div>
                {/* {this.renderError()} */}
                {/* <span>------------</span> */}
            </div>
        );
    }
}

export default ServerIndex;