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
            date_of_birth: `${this.state.birthMonth}/${this.state.birthDay}/${this.state.birthYear}`
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
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const selectMonth = (
            <select defaultValue="Select" onChange={this.handleChange("birthMonth")}>
                <option hidden disabled>Select</option>
                {[...Array(12).keys()].map(month => <option key={"month-" + (month + 1)} value={month + 1}>{months[month]}</option>)}
            </select>
        );

        const selectDay = (
            <select defaultValue="Select" onChange={this.handleChange("birthDay")}>
                <option hidden disabled>Select</option>
                {[...Array(31).keys()].map(day => <option key={"day-" + (day + 1)} value={day + 1}>{day + 1}</option>)}
            </select>
        );

        const earliestYear = new Date().getFullYear() - 3;

        const selectYear = (
            <select defaultValue="Select" onChange={this.handleChange("birthYear")}>
                <option hidden disabled>Select</option>
                {[...Array(150).keys()].map(year => <option key={"year-" + (earliestYear - year)} value={earliestYear - year}>{earliestYear - year}</option>)}
            </select>
        );

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
                    <div>
                        {selectMonth}
                        {selectDay}
                        {selectYear}
                    </div>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
                <Link to="/login">or log in here</Link>
            </div>
        )
    }
}

export default SignupForm
