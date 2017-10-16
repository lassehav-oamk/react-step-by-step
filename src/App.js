import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom'

import NewItemButton from './comps/NewItemButton';
import TodoList from './comps/TodoList';
import itemData from './data/itemData';
import Menu from './comps/Menu';
import NewItemInputs from './comps/NewItemInputs';



class App extends Component {

    constructor()
    {
        super();
        this.state = {
            items: [],
            editableVisible: false
        };

        this.toggleNewItemEditable = this.toggleNewItemEditable.bind(this);
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

    toggleNewItemEditable()
    {
        this.setState({
            editableVisible: !this.state.editableVisible
        });
    }

    addNewItem(item)
    {
        itemData.addItem(item.description, item.dueDate, item.type).then((items) => this.addItemsToState(items));
        this.toggleNewItemEditable();
    }

    render() {      
        //<Route exact path="/" render={props => <NewItemButton clickHandler={ this.toggleNewItemEditable } {...props} />} />  
        return (
            <Router>
                <div className="App container">
                    <Menu />
                    <Route exact path="/" component={NewItemButton} />
                    <Route path="/new" render={ props => <NewItemInputs addNewItemAction={ this.props.addNewItemAction } {...props } /> } />
                    <TodoList
                        items={ this.state.items }
                        editableVisible={ this.state.editableVisible }
                        addNewItemAction={this.addNewItem } />
                </div>
            </Router>            
        );
    }
}

export default App;