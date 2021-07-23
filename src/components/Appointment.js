import React, { Component } from 'react';
import AddAppointment from './AddAppointment';

export default class Appointment extends Component {
    render() {
        return (
            <div>
                <section className="row appointment-container">
                    <div className="appt-cols col span-1-of-2">
                        <h3>Schedule an Appointment</h3>
                        <AddAppointment />
                    </div>
                    <div className="appt-cols col span-1-of-2">
                        <h3>Recently scheduled appointments</h3>
                    </div>
                </section>
            </div>
        )
    }
}