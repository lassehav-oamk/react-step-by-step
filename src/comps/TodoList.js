import React, { Component } from 'react'

class TodoList extends Component {
    render () {
        return (
            <div>
                {this.props.items.map((item) =>
                    <div key={item.id}>
                         { item.description }, { item.date.format()}, { item.type }
                    </div>
                )}
            </div>
        )
    }
}

export default TodoList