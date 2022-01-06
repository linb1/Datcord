import React from "react";

class ServerForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field){
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(){
        const server = {
            name: this.state.name,
            owner_id: this.props.current_user_id
        }
        this.setState({ name: "" })
        this.props.createServer(server).then(response => this.props.history.push(`/channel/${response.server.id}`));
    }

    render(){
        // debugger
        return(
            <div>
                <form>
                    <label>Server Name</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange("name")}
                    />
                    <button onClick={this.handleSubmit}>Create Server</button>
                </form>
            </div>
        )
    }
}
export default ServerForm