import React from "react";

class ServerForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.catchServerError = this.catchServerError.bind(this)
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
        this.props.clearChannelsFromState();
        this.props.createServer(server).then(response => {
            // debugger;
            let channelId = Object.values(response.server.channels)[0].id;
            this.props.history.push(`/channel/${response.server.id}/${channelId}`)
        }
        );
        this.props.setShowModal(prev => !prev) // hide modal when user submit
    }

    catchServerError(){
        if((this.state.name.length < 2) || (this.state.name.length > 100)){
            return "error";
        } else {
            return "";
        }
    }

    render(){
        // debugger
        const error = this.catchServerError()
        return(
            <div className="create-server-form-container">
                <form className="create-server-form">
                    <div className="create-server-form-input">
                        <label>SERVER NAME</label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange("name")}
                        />
                    </div>
                    <div className="create-server-form-button-container">
                        <div className="create-server-form-button">
                            <div className={`create-server-form-button-wrapper ${error}`}>
                                <button className={error} onClick={this.handleSubmit}>Create</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default ServerForm