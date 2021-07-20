import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                
                <ul className="nav-links">
                    <li><NavLink to="/" className="logo">Logo</NavLink></li>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/admin" exact>Admin</NavLink></li>
                    <li><NavLink to="/appointment" exact>Schedule An Appointment</NavLink></li>
                </ul>
            </div>
        )
    }
}