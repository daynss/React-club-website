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
    const cartQty =
      this.props.cart.cartItems.length !== 0
        ? this.props.cart.cartItems.reduce((acc, item) => {
            return acc + item.qty;
          }, 0)
        : 0;

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
                onClick={(e) => {
                  return cartQty === 0 ? e.preventDefault() : null;
                }}
                to="/cart"
              >
                <MdShoppingCart size={22} />
                <span>({cartQty})</span>
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
                  onClick={this.handleClick}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/program"
                  onClick={this.handleClick}
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
                  onClick={this.handleClick}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link checkout-link"
                  activeClassName="active"
                  onClick={(e) => {
                    return cartQty === 0 ? e.preventDefault() : null;
                  }}
                  to="/cart"
                >
                  <MdShoppingCart size={22} />
                  <div>
                    <span>Cart</span>
                    <span>({cartQty})</span>
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
