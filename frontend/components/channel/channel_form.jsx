import React from "react";

class ChannelForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit() {
        const channel = {
            name: this.state.name,
            server_id: this.props.current_server_id
        }
        this.setState({ name: "" })
        this.props.createChannel(channel);
        this.props.setShowModal(prev => !prev);
    }

    catchServerError() {
        if ((this.state.name.length < 1) || (this.state.name.length > 100)) {
            return "error";
        } else {
            return "";
        }
    }

    render() {
        // debugger
        const error = this.catchServerError()
        return (
            <div className="create-channel-form-container">
                <form className="create-channel-form">
                    <div className="create-channel-form-input">
                        <label>CHANNEL NAME</label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange("name")}
                        />
                    </div>
                    <div className="create-channel-form-button-container">
                        <div className="create-channel-form-button">
                            <div className={`create-channel-form-button-wrapper ${error}`}>
                                <button className={error} onClick={this.handleSubmit}>Create</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default ChannelForm