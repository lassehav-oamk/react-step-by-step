import React, { Component } from 'react'
import TodoItem from './TodoItem';
import NewItemButtonEditableToggler from './NewItemButtonEditableToggler';

class TodoList extends Component {    

    render () {
        return (
            <div >
                <NewItemButtonEditableToggler {...this.props}/>
                { 
                    this.props.items.map((item) => {                        
                        const { id, dueDate, ...rest } = item;
                        return <TodoItem key={ item.id }          
                                    id={ id }
                                    isDoneToggleAction={ this.props.isDoneToggleAction }
                                    { ...rest }
                                    dueDate={ dueDate.format("DD.MM.YYYY") } />
                        }                    
                    )
                }
            </div>
        )
    }
}

export default TodoList