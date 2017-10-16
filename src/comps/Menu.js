import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import './Menu.css';

class Menu extends Component {
    render () {
        return (
            <div className="menu">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className={ "nav-link " + (this.props.location.pathname === "/" ? "active" : "") } to="/">List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={ "nav-link " + (this.props.location.pathname === "/graph" ? "active" : "") } to="/graph">Graph</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

const MenuWithRouter = withRouter(Menu)

export default MenuWithRouter
