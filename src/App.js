import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import NewItemButton from './comps/NewItemButton';
import TodoList from './comps/TodoList';
import itemData from './data/itemData';

class App extends Component {

    constructor()
    {
        super();
        this.state = {
            items: [],
            editableVisible: true
        };


        this.toggleNewItemEditable = this.toggleNewItemEditable.bind(this);
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

    toggleNewItemEditable()
    {
        this.setState({
            editableVisible: !this.state.editableVisible
        });
    }



    render() {

        return (
            <div className="App container">
                <NewItemButton clickHandler={ this.toggleNewItemEditable }/>
                <TodoList items = { this.state.items } editableVisible={ this.state.editableVisible } />
            </div>
        );
    }
}

export default App;