import React from 'react';
import { Link } from 'react-router-dom';

const NewItemButton = () => {
    return (
        <div>
            <Link to="/new"><button className="btn btn-primary">Add new item</button></Link>
        </div>
    )
}

export default NewItemButton