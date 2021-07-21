import React, { Component } from 'react';

export default class Appointment extends Component {
    render() {
        return (
            <div>
                <section className="row appointment-container">
                    <div className="appt-cols col span-1-of-2">
                        <h3>Appointment</h3>
                    </div>
                    <div className="appt-cols col span-1-of-2">
                        <h3>Recently scheduled appointments</h3>
                    </div>
                </section>
            </div>
        )
    }
}