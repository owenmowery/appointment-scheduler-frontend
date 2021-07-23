import React, { Component } from 'react';
import { addNewAppointment } from '../actions/index';

class AddAppointment extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            apptDateTime: '',
            status: 'true'
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        addNewAppointment(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Name: </label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                    <br />
                    <label>Email: </label>
                    <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
                    <br />
                    <label>Available Dates: </label>
                    <input type="date" name="apptDateTime" onChange={this.handleChange} value={this.state.apptDateTime} />
                    <br />
                    <input className="button" type="submit" />
                </form>
            </div>
        )
    }
}

export default AddAppointment;