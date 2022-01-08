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
    }

    render() {
        // debugger
        return (
            <div>
                <form>
                    <label>Channel Name</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange("name")}
                    />
                    <button onClick={this.handleSubmit}>Create Channel</button>
                </form>
            </div>
        )
    }
}
export default ChannelForm