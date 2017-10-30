import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom'

import TodoList from './comps/TodoList';
import itemData from './data/itemData';
import Menu from './comps/Menu';
import TodoGraph from './comps/TodoGraph';

class App extends Component {

    constructor()
    {
        super();
        this.state = {
            items: [],
            editableVisible: false
        };

        this.addNewItem = this.addNewItem.bind(this);
    }

    componentDidMount () {
        itemData.getItems().then(data => {
            this.setState({items: data})
        });
    }

    addItemsToState(items)
    {
        this.setState({ items });
    }

    addNewItem(item)
    {
        itemData.addItem(item.description, item.dueDate, item.type).then((items) => this.addItemsToState(items));
    }

    isDoneToggleAction(itemId)
    {
        itemData.isDoneToggle(itemId);
    }

    render() {

        return (
            <Router>
                <div className="App container">
                    <Menu />
                    <Route exact path="/" render={ props => <TodoList
                                                                items={ this.state.items }
                                                                addNewItemAction={ this.addNewItem }
                                                                isDoneToggleAction={ this.isDoneToggleAction }
                                                                {...props }/> } />
                    <Route exact path="/graph" render={ props => <TodoGraph items={this.state.items} {...props} /> } />
                </div>
            </Router>
        );
    }
}

export default App;