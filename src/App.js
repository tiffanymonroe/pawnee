import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Home from './Home'
import About from './About'
import Government from './Government'
import Media from './Media'

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
        <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="government">Government</Link>
          <Link to="media">Media</Link>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/government" component={Government} />
        <Route path="/media" component={Media} />
      </div>
      </Router>
    );
  }
}

export default App;
