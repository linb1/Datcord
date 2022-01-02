import React from "react";
import { Link } from "react-router-dom"
import background from '../../../app/assets/images/background-session.png';
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
        // debugger;
        return (
            <div className="login">
                <img className="background" src={background} />
                <div className="login-form-container">
                    <form className="login-form"> 
                        <div className="login-form-header">
                            <h1>Welcome back!</h1>
                            <h2>We're so excited to see you again!</h2>
                        </div>
                        <div className="login-form-inputs">
                            <label>EMAIL</label>
                            <input
                                    className="login-email"
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleChange("email")}
                            />
                        </div>
                        <div className="login-form-inputs">
                            <label>PASSWORD</label>
                            <input
                                    className="login-password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange("password")}
                            />
                        </div>
                        <div className="login-form-button-container">
                            <button onClick={this.handleSubmit}>Login</button>
                            <div className="login-form-link">
                                <span>Need an Account?&nbsp;&nbsp;&nbsp;</span>
                                <Link className="signup-link" to="/signup">Register</Link>
                            </div>
                            {this.renderError()}
                        </div>
                    </form>
                    <div className="login-form-demo">
                        <button className="demo-login" onClick={this.handleDemoLogin}>Demo Login</button>
                        <div className="login-form-demo-text">
                            <h1>Log in with Demo User</h1>
                            <h2>Use this to log in as an exisiting user without sign up</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm
