import React, { Component } from 'react';
import SignIn from './signInForm'

export default class Admin extends Component {
    render() {
        return (
            <section className="row">
                <div className="col span-1-of-2 admin-col">
                    <h1>Admin Page</h1>
                </div>
                <div className="col span-1-of-2 admin-col">
                    <SignIn />
                </div>
            </section>
        )
    }
}