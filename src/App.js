import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import About from './About'
import Government from './Government'
import Media from './Media'

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Government />
        <Media />
      </div>
    );
  }
}

export default App;
