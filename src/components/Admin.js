import React, { Component } from 'react';
import SignIn from './signInForm'

export default class Admin extends Component {

    render() {
        return (
            <section className="row">
                <div className="col span-1-of-2 admin-cols">
                    <h3>Welcome, Admin</h3>
                    <p>Please login to view scheduled appointments</p>
                    <button className="button" >Login</button>
                </div>
                <div className="col span-1-of-2 admin-cols">
                    <SignIn />
                </div>
            </section>
        )
    }
}