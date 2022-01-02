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
        // const user = Object.assign({}, this.state);
        this.props.signup(this.stateWithDOB()).then(() => this.props.history.push('/@me'));
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
                            <label>EMAIL</label>
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleChange("email")}
                            />
                        </div>
                        <div className="signup-form-inputs">
                            <label>USERNAME</label>
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={this.handleChange("username")}
                            />
                        </div>
                        <div className="signup-form-inputs">
                            <label>PASSWORD</label>
                                  <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange("password")}
                            />
                        </div>
                        <div className="signup-form-select-container">
                            <label>DATE OF BIRTH</label>
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
