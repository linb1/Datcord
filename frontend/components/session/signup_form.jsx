import React from "react";
import { Link } from "react-router-dom"
class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            birthMonth: null,
            birthDay: null,
            birthYear: null
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.stateWithDOB = this.stateWithDOB.bind(this)

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
        this.props.signup(this.stateWithDOB()).then(() => this.props.history.push('/@me'));
    }

    renderError() { // not used right now
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
                if (emailErrors.length === 0 ){
                    return <></>;
                } else {
                    for (let error of emailErrors){
                        if(error.includes("blank")){
                            let blankError = "This field is required"
                            return <span>- {blankError}</span>;
                        }

                        if (error.includes("invalid")) {
                            return <span>- {error}</span>;
                        }

                        if (error.includes("taken")) {
                            return <span>- {error}</span>;
                        }
                    }
                }
            case "username":
                const usernameErrors = this.props.errors.filter(error => error.includes("Username"));
                if (usernameErrors.length === 0) {
                    return <></>;
                }
                for (let error of usernameErrors) {
                    if (error.includes("blank")) {
                        let blankError = "This field is required"
                        return <span>- {blankError}</span>;
                    }
                    if (error.includes("short")) {
                        return <span>- {error}</span>;
                    }
                }
            case "password":
                const passwordErrors = this.props.errors.filter(error => error.includes("Password"));
                if (passwordErrors.length === 0) {
                    return <></>;
                }
                for (let error of passwordErrors) {
                    if (error.includes("blank")) {
                        let blankError = "This field is required"
                        return <span>- {blankError}</span>;
                    }
                    if (error.includes("short")) {
                        return <span>- {error}</span>;
                    }
                }
            case "dob":
                const dobErrors = this.props.errors.filter(error => error.includes("Date of birth"));
                if (dobErrors.length === 0) {
                    return <></>;
                } else if (dobErrors.length > 0) {
                    return <span>- {dobErrors[0]}</span>;
                }
            default:
                return <></>;
        }
    }

    setErrorClass(error) {
        return (error.type === "span") ? "error" : "";
    }

    createSelect(){
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthIndex = [...Array(12).keys()];
        const dayIndex = [...Array(31).keys()];
        const yearIndex = [...Array(150).keys()];
        const minimumAgeYear = new Date().getFullYear() - 3;
        const monthOptions = monthIndex.map(monthIdx => {
            return <option key={monthIdx} value={monthIdx+1}>{months[monthIdx]}</option>
        })
        const dayOptions = dayIndex.map(dayIdx => {
            return <option key={dayIdx} value={dayIdx+1}>{dayIdx+1}</option>
        })
        const yearOptions = yearIndex.map(yearIdx => {
            return <option key={yearIdx} value={minimumAgeYear - yearIdx}>{minimumAgeYear - yearIdx}</option>
        })

        const selects = (
            <div className="signup-form-select">
                <select className="select-month" onChange={this.handleChange("birthMonth")} defaultValue="Select" >
                    <option key="select" disabled hidden>Select</option>
                    {monthOptions}
                </select>
                <select className="select-day" onChange={this.handleChange("birthDay")} defaultValue="Select" >
                    <option key="select" disabled hidden>Select</option>
                    {dayOptions}
                </select>
                <select className="select-year" onChange={this.handleChange("birthYear")} defaultValue="Select" >
                    <option key="select" disabled hidden>Select</option>
                    {yearOptions}
                </select>
            </div>
        )

        return selects;
    }



    render() {
        const emailError = this.createErrorComponent("email");
        const passwordError = this.createErrorComponent("password");
        const usernameError = this.createErrorComponent("username");
        const dobError = this.createErrorComponent("dob");

        const emailErrorClass = this.setErrorClass(emailError);
        const passwordErrorClass = this.setErrorClass(passwordError);
        const usernameErrorClass = this.setErrorClass(usernameError);
        const dobErrorClass = this.setErrorClass(dobError);

        return (
            <div className="signup">
                <img className="background" src={window.background_session} />
                <div className="signup-form-container">
                    <form className="signup-form">
                        <div className="signup-form-header">
                            <h1>Create an account</h1>
                        </div>
                        <div className="signup-form-inputs">
                            <label className={emailErrorClass}>EMAIL {emailError}</label>
                            <input
                                className={emailErrorClass}
                                type="text"
                                value={this.state.email}
                                onChange={this.handleChange("email")}
                            />
                            {/* <div className="error-modal-anchor">
                                <div className="error-modal-container">
                                    <div className={`error-modal ${emailErrorClass}-timeout`}>
                                        <img src={window.error_modal_icon} width="20" height="20"/>
                                        <span>Please include an '@' in the email address. 'input' is missing an '@'. </span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="signup-form-inputs">
                            <label className={usernameErrorClass}>USERNAME {usernameError}</label>
                            <input
                                className={usernameErrorClass}
                                type="text"
                                value={this.state.username}
                                onChange={this.handleChange("username")}
                            />
                        </div>
                        <div className="signup-form-inputs">
                            <label className={passwordErrorClass}>PASSWORD {passwordError}</label>
                            <input
                                className={passwordErrorClass}
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange("password")}
                            />
                        </div>
                        <div className="signup-form-select-container">
                            <label className={dobErrorClass}>DATE OF BIRTH {dobError}</label>
                            {this.createSelect()}
                        </div>
                        <div className="signup-form-button-container">
                            <button onClick={this.handleSubmit}>Continue</button>
                            <div className="signup-form-link">
                                <Link className="login-link" to="/login">Already have an account?</Link> 
                            </div>
                            {/* {this.renderError()} */}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm
