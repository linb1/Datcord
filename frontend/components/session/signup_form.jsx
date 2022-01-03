import React from "react";
import { Link } from "react-router-dom"
import background from '../../../app/assets/images/background-session.png';
class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            birthMonth: null,
            birthDay: null,
            birthYear: null,
            emailError: <></>,
            passwordError: <></>,
            usernameError: <></>,
            dobError: <></>,
            emailErrorClass: "",
            passwordErrorClass: "",
            usernameErrorClass: "",
            dobErrorClass: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.stateWithDOB = this.stateWithDOB.bind(this)
        this.betterRenderError = this.betterRenderError.bind(this)
        this.handleUsernameError = this.handleUsernameError.bind(this)
        this.handlePasswordError = this.handlePasswordError.bind(this)
        this.handleEmailError = this.handleEmailError.bind(this)
        this.handleDobError = this.handleDobError.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    stateWithDOB(){
        const dobState = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            date_of_birth: `${this.state.birthYear}/${this.state.birthMonth}/${this.state.birthDay}`
        }
        return Object.assign({},dobState)
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        this.props.signup(this.stateWithDOB()).then(() => this.props.history.push('/@me'));
        this.betterRenderError();
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

    handleUsernameError(error = false){
        if (this.state.username === "") {
            error = "This field is required"
            this.setState({ usernameError: <span>- {error}</span> });
            this.setState({ usernameErrorClass: "error" });
        } else if (error) {
            this.setState({ usernameError: <span>- {error}</span> });
            this.setState({ usernameErrorClass: "error" });
        } else {
            this.setState({ usernameError: <></> });
            this.setState({ usernameErrorClass: "" });
        }
    }

    handlePasswordError(error){
        if (this.state.password === "") {
            error = "This field is required";
            this.setState({ passwordError: <span>- {error}</span> });
            this.setState({ passwordErrorClass: "error" });
        } else if (error) {
            this.setState({ passwordError: <span>- {error}</span> });
            this.setState({ passwordErrorClass: "error" });
        } else {
            this.setState({ passwordError: <></> });
            this.setState({ passwordErrorClass: "" });
        }
    }

    handleEmailError(error){
        if (this.state.email === "") {
            error = "This field is required";
            this.setState({ emailError: <span>- {error}</span> });
            this.setState({ emailErrorClass: "error" });
        } else if (error) {
            this.setState({ emailError: <span>- {error}</span> });
            this.setState({ emailErrorClass: "error" });
        } else {
            this.setState({ emailError: <></> });
            this.setState({ emailErrorClass: "" });
        }
    }

    handleDobError(error){
        if ((this.state.birthYear == null) || (this.state.birthMonth == null) || (this.state.birthDay == null)){
            error = "This field is required";
            this.setState({ dobError: <span>- {error}</span> });
            this.setState({ dobErrorClass: "error" });
        } else {
            this.setState({ dobError: <></> });
            this.setState({ dobErrorClass: "" });
        }
    }

    betterRenderError() {
        const errors = this.props.errors.filter(error => error.includes("blank"))
        this.props.errors.forEach(error => {
            if (error.includes("Username")){
                this.handleUsernameError(error)
            }

            if (error.includes("Password")) {
                this.handlePasswordError(error)
            }

            if (error.includes("Email")) {
                this.handleEmailError(error)
            }

            if (error.includes("Date of birth")) {
                this.handleDobError(error)
            }
        })

        this.handleUsernameError();
        this.handlePasswordError();
        this.handleEmailError();
        this.handleUsernameError();

    }

    // remakeRenderError(field, errors){
    //     switch(field){
    //         case "username":
    //             if (errors.length === 0){
    //                 return <></>;
    //             }
    //             errors.forEach(error => {
    //                 if (error.includes("blank")){
    //                     return <span>- {"This field is required"}</span>
    //                 }
    //             })

    //             return
    //     }
    // }

    render() {

        // const errors = this.props.errors;
        // let usernameErrors = [];
        // let passwordErrors = [];
        // let emailErrors = [];
        // let dobErrors = [];

        // errors.forEach(error => {
        //     if (error.includes("Username")){
        //         usernameErrors.push(error)
        //     }
        //     if (error.includes("Password")) {
        //         passwordErrors.push(error)
        //     }
        //     if (error.includes("Email")) {
        //         emailErrors.push(error)
        //     }
        //     if (error.includes("Date of birth")) {
        //         dobErrors.push(error)
        //     }
        // })

        //selects
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const selectMonth = (
            <select className="select-month" defaultValue="Select" onChange={this.handleChange("birthMonth")}>
                <option hidden disabled>Select</option>
                {[...Array(12).keys()].map(month => <option key={"month-" + (month + 1)} value={month + 1}>{months[month]}</option>)}
            </select>
        );

        const selectDay = (
            <select className="select-day" defaultValue="Select" onChange={this.handleChange("birthDay")}>
                <option hidden disabled>Select</option>
                {[...Array(31).keys()].map(day => <option key={"day-" + (day + 1)} value={day + 1}>{day + 1}</option>)}
            </select>
        );

        const earliestYear = new Date().getFullYear() - 3;

        const selectYear = (
            <select className="select-year" defaultValue="Select" onChange={this.handleChange("birthYear")}>
                <option hidden disabled>Select</option>
                {[...Array(150).keys()].map(year => <option key={"year-" + (earliestYear - year)} value={earliestYear - year}>{earliestYear - year}</option>)}
            </select>
        );
        return (
            <div className="signup">
                <img className="background" src={background} />
                <div className="signup-form-container">
                    <form className="signup-form">
                        <div className="signup-form-header">
                            <h1>Create an account</h1>
                        </div>
                        <div className="signup-form-inputs">
                            <label className={this.state.emailErrorClass}>EMAIL {this.state.emailError}</label>
                            <input
                                className={this.state.emailErrorClass}
                                type="text"
                                value={this.state.email}
                                onChange={this.handleChange("email")}
                            />
                        </div>
                        <div className="signup-form-inputs">
                            <label className={this.state.usernameErrorClass}>USERNAME {this.state.usernameError}</label>
                            <input
                                className={this.state.usernameErrorClass}
                                type="text"
                                value={this.state.username}
                                onChange={this.handleChange("username")}
                            />
                        </div>
                        <div className="signup-form-inputs">
                            <label className={this.state.passwordErrorClass}>PASSWORD {this.state.passwordError}</label>
                            <input
                                className={this.state.passwordErrorClass}
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange("password")}
                            />
                        </div>
                        <div className="signup-form-select-container">
                            <label className={this.state.dobErrorClass}>DATE OF BIRTH {this.state.dobError}</label>
                            <div className="signup-form-select">
                                {selectMonth}
                                {selectDay}
                                {selectYear}
                            </div>
                        </div>
                        <div className="signup-form-button-container">
                            <button onClick={this.handleSubmit}>Continue</button>
                            <div className="signup-form-link">
                                <Link className="login-link" to="/login">Already have an account?</Link> 
                            </div>
                            {this.renderError()}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm
