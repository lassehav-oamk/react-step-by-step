import React, { Component } from 'react';
import NewItemInputs from './NewItemInputs';
import NewItemButton from './NewItemButton';

class NewItemButtonEditableToggler extends Component {
    constructor()
    {
        super();
        this.state = {
            newItemButtonVisible: true
        };

        this.toggleNewItemEditable = this.toggleNewItemEditable.bind(this);
    }

    toggleNewItemEditable()
    {
        this.setState({
            newItemButtonVisible: !this.state.newItemButtonVisible
        });
    }
    render () {
        return (
            <div>
                <NewItemButton isVisible={this.state.newItemButtonVisible} onClick={this.toggleNewItemEditable}/>
                <NewItemInputs isVisible={!this.state.newItemButtonVisible} closeEditing={this.toggleNewItemEditable} {...this.props } />
            </div>
        )
    }
}

export default NewItemButtonEditableToggler