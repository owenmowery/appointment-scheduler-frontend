import React, { Component } from 'react';
import About from '../components/About';
//import { Col, Row } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div>
                <section className="row home-container">
                    <div className="title col span-1-of-2">
                        <h1>Home</h1>
                    </div>
                </section>
                <section className="row about-row">
                    <About />
                </section>
            </div>
        )
    }
}