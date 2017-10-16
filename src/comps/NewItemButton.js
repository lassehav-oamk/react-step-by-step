import React from 'react';

const NewItemButton = (props) => {
    if(props.isVisible === false)
    {
        return null;
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={ props.onClick }>Add new item</button>
        </div>
    )
}

export default NewItemButton