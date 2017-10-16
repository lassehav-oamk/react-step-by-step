import React, { Component } from 'react'

class TodoItem extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-4">{ this.props.description }</div>
                <div className="col">{ this.props.dueDate }</div>
                <div className="col">{ this.props.type }</div>
            </div>
        )
    }
}

export default TodoItem