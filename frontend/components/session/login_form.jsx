import React from "react";
import { Link } from "react-router-dom"
import background from '../../../app/assets/images/background-session.png';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            emailError: <></>,
            passwordError: <></>,
            emailErrorClass: "",
            passwordErrorClass: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoLogin = this.handleDemoLogin.bind(this)
        this.betterRenderError = this.betterRenderError.bind(this)
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
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(user).then(() => this.props.history.push('/@me'));
        this.betterRenderError();
    }

    handleDemoLogin(e){
        e.preventDefault();
        this.props.login({email: "demo@email.com", password: "password"}).then(() => this.props.history.push('/@me'));
    }

    renderError() { // dont need for now
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

    betterRenderError(){
        if (this.state.email === ""){
            let error = "This field is required"
            this.setState({ emailError: <span>- {error}</span>});
            this.setState({emailErrorClass: "error"});
        } else if (this.props.errors.length !== 0) {
            this.setState({ emailError: <span>- {this.props.errors[0]}</span> });
            this.setState({ emailErrorClass: "error" });
        } else {
            this.setState({ emailError: <></> });
            this.setState({ emailErrorClass: "" });
        }

        if (this.state.password === ""){
            let error = "This field is required";
            this.setState({ passwordError: <span>- {error}</span> });
            this.setState({ passwordErrorClass: "error" });
        } else if (this.props.errors.length !== 0) {
            this.setState({ passwordError: <span>- {this.props.errors[0]}</span> });
            this.setState({ passwordErrorClass: "error" });
        } else {
            this.setState({ passwordError: <></> });
            this.setState({ passwordErrorClass: "" });
        }
    }

    remakeRenderError(field){
        switch(field){
            case "email":
                if ((this.state.email === "") && (this.props.errors.length !== 0)) {
                    let error = "This field is required"
                    return <span>- {error}</span>;
                } else if (this.props.errors.length !== 0) {
                    return <span>- {this.props.errors[0]}</span>;
                } else {
                    return <></>;
                }
            case "password":
                if ((this.state.password === "") && (this.props.errors.length !== 0)) {
                    let error = "This field is required"
                    return <span>- {error}</span>;
                } else if (this.props.errors.length !== 0) {
                    return <span>- {this.props.errors[0]}</span>;
                } else {
                    return <></>;
                }
            default:
                return null;
        }
    }

    remakeSetErrorClass(error){
        if (error.type === "span"){
            return "error";
        } else {
            return "";
        }
    }

    render() {
        // debugger;
        const emailError = this.remakeRenderError("email");
        const passwordError = this.remakeRenderError("password");
        const emailErrorClass = this.remakeSetErrorClass(emailError);
        const passwordErrorClass = this.remakeSetErrorClass(passwordError);
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
                            <label className={emailErrorClass}>EMAIL {emailError}</label>
                            <input
                                className={emailErrorClass}
                                type="text"
                                value={this.state.email}
                                onChange={this.handleChange("email")}
                            />
                        </div>
                        <div className="login-form-inputs">
                            <label className={passwordErrorClass}>PASSWORD {passwordError}</label>
                            <input
                                className={passwordErrorClass}
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
