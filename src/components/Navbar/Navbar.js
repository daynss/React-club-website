import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linksClassName: "navbar-links hidden",
            menuClassName: "menu-icon",
            linksVisible: false
        }
    }

    handleClick = () => {
        if (!this.state.linksVisible) {
            this.setState({
                linksClassName: "navbar-links visible",
                menuClassName: "menu-icon cross",
                linksVisible: true
            });
        } else {
            this.setState({
                linksClassName: "navbar-links hidden",
                menuClassName: "menu-icon",
                linksVisible: false
            });
        }
    };

    render() {
        return (
            <nav className="Navbar">
                <div className="navbar-container">
                    <div className="navbar-responsive">
                        <div className="logo">
                            <NavLink className="nav-link" to="/">Imaginarium Club</NavLink>
                        </div>
                        <div onClick={this.handleClick} className={this.state.menuClassName}>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                    </div>
                    <div className={this.state.linksClassName}>
                        <ul>
                            <li><NavLink className="nav-link" exact activeClassName="active" to="/">About</NavLink></li>
                            <li><NavLink className="nav-link" activeClassName="active" to="/program">Program</NavLink></li>
                            <li><NavLink className="nav-link" activeClassName="active" to="/tickets">Tickets</NavLink></li>
                            <li><NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;