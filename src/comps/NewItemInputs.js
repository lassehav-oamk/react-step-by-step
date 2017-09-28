import React, { Component } from 'react'

class NewItemInputs extends Component {
    constructor(props){
        super(props);

        this.state = {
            descriptionValue: "",
            dueDateValue: "",
            typeValue: ""
        };
        
        this.descriptionHandleChange = this.descriptionHandleChange.bind(this);
        this.dueDateHandleChange = this.dueDateHandleChange.bind(this);
        this.typeHandleChange = this.typeHandleChange.bind(this);       
        this.saveNewItem = this.saveNewItem.bind(this); 
    }

    saveNewItem()
    {
        this.props.addNewItemAction({
            description: this.state.descriptionValue,
            dueDate: this.state.dueDateValue,
            type: this.state.typeValue
        });
    }

    descriptionHandleChange(event)
    {        
        this.setState({
            descriptionValue: event.target.value
        });
    }

    dueDateHandleChange(event)
    {
        this.setState({
            dueDateValue: event.target.value
        });
    }

    typeHandleChange(event)
    {
        this.setState({
            typeValue: event.target.value
        });
    }

    render () {
        return (
            <div className="row">
                <div className="col-6"><input type="text" value={this.state.descriptionValue} onChange={this.descriptionHandleChange} /></div>
                <div className="col"><input type="date" value={this.state.dueDateValue} onChange={this.dueDateHandleChange} /></div>
                <div className="col">
                    <input type="text" value={this.state.typeValue} onChange={this.typeHandleChange} />
                    <button onClick={this.saveNewItem}>save</button>
                </div>
            </div>
        )
    }
}

export default NewItemInputs