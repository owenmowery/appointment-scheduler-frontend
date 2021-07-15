import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import Appointment from './components/Appointment';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/admin" component={ Admin } />
            <Route exact path="/appointment" component={Appointment} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
