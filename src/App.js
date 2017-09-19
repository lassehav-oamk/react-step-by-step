import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './comps/HelloWorld';

class App extends Component {

  nappiPainettu()
  {
    console.log("jep");
    // ... 
  }

  render() {
    return (
      <div className="App">
        <HelloWorld buttonClickHandler={this.nappiPainettu}/>        
      </div>
    );
  }
}

export default App;