import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
                    <div className="col-4"><input type="text" className="form-control" value={this.state.descriptionValue} onChange={this.descriptionHandleChange} /></div>
                    <div className="col"><input type="date" className="form-control" value={this.state.dueDateValue} onChange={this.dueDateHandleChange} /></div>
                    <div className="col">
                        <form className="form-inline">
                            <input className="form-control" type="text" value={this.state.typeValue} onChange={this.typeHandleChange} />
                            <button className="btn btn-primary btn-sm" onClick={this.saveNewItem}>save</button>
                            <Link to="/"><button type="button" className="btn btn-light btn-sm">X</button></Link>
                        </form>
                    </div>                
            </div>            
        )
    }
}

export default NewItemInputs