import React, { Component } from 'react'

class NewItemButton extends Component {
    render () {
        return (
            <div>
                <button onClick={ this.props.clickHandler }>Add new item</button>
            </div>
        )
    }
}

export default NewItemButton