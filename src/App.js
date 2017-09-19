import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './comps/HelloWorld';
import TodoList from './comps/TodoList';

import itemData from './data/itemData';

class App extends Component {

    constructor()
    {
        super();
        this.state = { items: [] };
    }

    componentDidMount () {
        itemData.getItems().then(data => {
            this.setState({items: data})
        });
    }

    buttonPressed()
    {
      console.log("test");
      // ... 
    }

    render() {

        return (
            <div className="App">
                <div>
                    <HelloWorld buttonClickHandler={this.buttonPressed} />
                </div>
                <div>
                    <TodoList items = { this.state.items } />
                </div>
            </div>
        );
    }
}

export default App;