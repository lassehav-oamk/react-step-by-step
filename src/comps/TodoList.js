import React, { Component } from 'react'
import TodoItem from './TodoItem';
import NewItemButtonEditableToggler from './NewItemButtonEditableToggler';

class TodoList extends Component {
    render () {
        return (
            <div >
                <NewItemButtonEditableToggler {...this.props}/>
                { this.props.items.map((item) =>
                    <TodoItem key={ item.id }
                              id={ item.id }
                              isDoneToggleAction={ this.props.isDoneToggleAction }
                              description={ item.description }
                              type={ item.type }
                              dueDate={ item.dueDate.format("DD.MM.YYYY") } />
                )}
            </div>
        )
    }
}

export default TodoList