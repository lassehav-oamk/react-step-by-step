import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './comps/HelloWorld';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
      </div>
    );
  }
}

export default App;
