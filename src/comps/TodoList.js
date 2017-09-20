import React, { Component } from 'react'
import TodoItem from './TodoItem';

class TodoList extends Component {

    displayEditable()
    {
        if(this.props.editableVisible)
        {
            return (<div>Editable</div>);
        }
        else
        {
            return(<div>not</div>);
        }
    }

    render () {
        return (
            <div >
                {this.props.items.map((item) =>
                    <TodoItem key={item.id} description={ item.description } type={ item.type } dueDate={ item.date.format("DD.MM.YYYY")} />
                )}
                { this.displayEditable() }
            </div>
        )
    }
}

export default TodoList