import React, { Component } from 'react';
//import axios from 'axios';

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit(event) {

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <>
                <h3>Admin Login</h3>
                <form className="signin-form"  onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input type="email" value={this.state.email} />
                    <br/>
                    <label>Password:</label>
                    <input type="password" value={this.state.password} />
                    <br/>
                    <input className="button"  type="submit" value="Submit" />
                </form>
            </>
        )
    }
}
