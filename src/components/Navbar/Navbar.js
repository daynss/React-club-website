import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linksClassName: "navbar-links hidden",
      menuClassName: "menu-icon",
      linksVisible: false,
    };
  }

  handleClick = () => {
    if (!this.state.linksVisible) {
      this.setState({
        linksClassName: "navbar-links visible",
        menuClassName: "menu-icon cross",
        linksVisible: true,
      });
    } else {
      this.setState({
        linksClassName: "navbar-links hidden",
        menuClassName: "menu-icon",
        linksVisible: false,
      });
    }
  };

  render() {
    return (
      <nav className="Navbar">
        <div className="navbar-container">
          <div className="navbar-responsive">
            <div className="logo">
              <NavLink className="nav-link" to="/">
                Imaginarium Club
              </NavLink>
            </div>
            <div className="nav-icons">
              <NavLink
                className="checkout-link"
                activeClassName="active"
                to="/cart"
              >
                <MdShoppingCart size={22} />
                <span>({this.props.cart.totalQty})</span>
              </NavLink>

              <div
                onClick={this.handleClick}
                className={this.state.menuClassName}
              >
                <span />
                <span />
                <span />
              </div>
            </div>{" "}
          </div>
          <div className={this.state.linksClassName}>
            <ul>
              <li>
                <NavLink
                  className="nav-link"
                  exact
                  activeClassName="active"
                  to="/"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/program"
                >
                  Program
                </NavLink>
              </li>
              {/* <li><NavLink className="nav-link" activeClassName="active" to="/tickets">Tickets</NavLink></li> */}
              <li>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link checkout-link"
                  activeClassName="active"
                  to="/cart"
                >
                  <MdShoppingCart size={22} />
                  <div>
                    <span>Cart</span>
                    <span>({this.props.cart.totalQty})</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(Navbar);
