import React, { Component } from 'react'
import TodoItem from './TodoItem';
import NewItemInputs from './NewItemInputs';

class TodoList extends Component {

    displayEditable()
    {
        if(this.props.editableVisible)
        {
            return (<NewItemInputs addNewItemAction={ this.props.addNewItemAction }/>);
        }
        else
        {
            return null;
        }
    }

    render () {
        return (
            <div >
                { this.displayEditable() }
                {this.props.items.map((item) =>
                    <TodoItem key={item.id} description={ item.description } type={ item.type } dueDate={ item.dueDate.format("DD.MM.YYYY")} />
                )}

            </div>
        )
    }
}

export default TodoList