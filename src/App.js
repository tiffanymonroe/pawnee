import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Home from './Home'
import About from './About'
import Government from './Government'
import Media from './Media'
import Disclaimer from './Disclaimer'

//React Router
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg justify-content-end">
          <Link to="/" className="nav-link"><i className="fas fa-home"></i></Link>
          <Link to="about" className="nav-link">About</Link>
          <Link to="government" className="nav-link">Government</Link>
          <Link to="media" className="nav-link">Media</Link>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/government" component={Government} />
        <Route path="/media" component={Media} />
        <br />
        <Disclaimer />
      </div>
      </Router>
    );
  }
}

export default App;
