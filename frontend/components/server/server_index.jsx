import React from "react"
import {Link} from "react-router-dom"
import ServerFormContainer from "./server_form_container"
import ServerIndexItemContainer from "./server_index_item_container";
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
            return <li key={idx}><ServerIndexItemContainer server={server}/></li>
        })
        return (
            <div>
                <span>------------</span>
                <br/>
                <span>server index</span>
                <ul>
                    <Link to={`/channel/@me`}>PROFILE</Link>
                    {server}
                    <ServerFormContainer/>
                </ul>
                {this.renderError()}
                <span>------------</span>
            </div>
        );
    }
}

export default ServerIndex;