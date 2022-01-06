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

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.login(user).then(() => this.props.history.push('/channel/@me'));
    }


    handleDemoLogin(e){
        e.preventDefault();
        this.props.login({email: "demo@email.com", password: "password"}).then(() => this.props.history.push('/channel/@me'));
    }

    renderError() { //dont need right now
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
  
    createErrorComponent(field){
        switch(field){
            case "email":
                const emailErrors = this.props.errors.filter(error => error.includes("Email"));
                if (emailErrors.length === 0) {
                    return <></>;
                } else {
                    for (let error of emailErrors) {
                        if (error.includes("blank")) {
                            let blankError = "This field is required"
                            return <span>- {blankError}</span>;
                        }

                        if (error.includes("invalid")) {
                            return <span>- {error}</span>;
                        }
                    }
                }
            case "password":
                const passwordErrors = this.props.errors.filter(error => error.includes("password"));
                if (passwordErrors.length === 0) {
                    return <></>;
                } else {
                    for (let error of passwordErrors) {
                        if (error.includes("blank")) {
                            let blankError = "This field is required"
                            return <span>- {blankError}</span>;
                        }

                        if (error.includes("invalid")) {
                            return <span>- {error}</span>;
                        }
                    }
                }
            default:
                return <></>;
        }
    }

    setErrorClass(error){
        return (error.type === "span") ? "error" : "";
    }

    render() {
        const emailError = this.createErrorComponent("email");
        const passwordError = this.createErrorComponent("password");
        const emailErrorClass = this.setErrorClass(emailError);
        const passwordErrorClass = this.setErrorClass(passwordError);
        return (
            <div className="login">
                <img className="background" src={window.background_session} />
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
                            {/* {this.renderError()} */}
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
