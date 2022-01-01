import React from "react";
import { Link } from "react-router-dom"
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoLogin = this.handleDemoLogin.bind(this)
    }

    componentDidMount(){
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
        this.props.login(user).then(() => this.props.history.push('/@me'));
    }

    handleDemoLogin(e){
        e.preventDefault();
        this.props.login({email: "demo@email.com", password: "password"}).then(() => this.props.history.push('/@me'));
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
                    {/* if button doesnt work, give form onSubmit and use input type submit */}
                    <h1>Login</h1>
                    {this.renderError()}
                    <label>Email
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                        />
                    </label>
                    <label>Password
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Login</button>
                    <button onClick={this.handleDemoLogin}>Demo Login</button>
                </form>
                <Link to="/signup">or sign up here</Link>
            </div>
        )
    }
}

export default LoginForm
