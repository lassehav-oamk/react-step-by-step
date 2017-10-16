import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
    render () {
        console.log("route props", this.props);
        return (
            <div className="menu">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/graph">Graph</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu
