import React from "react";
import { Link } from "react-router-dom"
class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user).then(() => this.props.history.push('/@me'));
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

    render() {
        return (
            <div>
                <form>
                    <h1>Signup</h1>
                    {this.renderError()}
                    <label>Email
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                        />
                    </label>
                    <label>Username
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange("username")}
                        />
                    </label>
                    <label>Password
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
                <Link to="/login">or log in here</Link>
            </div>
        )
    }
}

export default SignupForm
