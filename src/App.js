import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';

import NewItemButton from './comps/NewItemButton';
import TodoList from './comps/TodoList';
import itemData from './data/itemData';

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

    addNewItem(item)
    {
        itemData.addItem(item.description, item.dueDate, item.type).then((items) => this.addItemsToState(items));
        this.toggleNewItemEditable();
    }



    render() {

        return (
            <div className="App container">
                <NewItemButton clickHandler={ this.toggleNewItemEditable }/>
                <TodoList
                    items={ this.state.items }
                    editableVisible={ this.state.editableVisible }
                    addNewItemAction={this.addNewItem } />
            </div>
        );
    }
}

export default App;