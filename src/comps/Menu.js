import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
    render () {
        return (
            <div className="menu">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to="/"><a className="nav-link active">List</a></Link>
                    </li>
                    <li className="nav-item">                        
                        <Link to="/graph"><a className="nav-link">Graph</a></Link>
                    </li>                    
                </ul>
            </div>
        )
    }
}

export default Menu
