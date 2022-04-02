import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [cartQty, setCartQty] = useState(0);

  useEffect(() => {
    const cartQty =
      cart.cartItems.length !== 0
        ? cart.cartItems.reduce((acc, item) => {
            return acc + item.qty;
          }, 0)
        : 0;

    setCartQty(cartQty);
  }, [cart]);

  const handleClick = () => {
    setMobileMenuVisible((mobileMenuVisible) => !mobileMenuVisible);
  };

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
              onClick={mobileMenuVisible ? handleClick : null}
              to="/cart"
            >
              <MdShoppingCart />
              <span>({cartQty})</span>
            </NavLink>

            <div
              onClick={handleClick}
              className={`menu-icon ${mobileMenuVisible ? "cross" : ""}`}
            >
              <span />
              <span />
              <span />
            </div>
          </div>{" "}
        </div>
        <div
          className={`navbar-links ${mobileMenuVisible ? "visible" : "hidden"}`}
        >
          <ul>
            <li>
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/"
                onClick={mobileMenuVisible ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/program"
                onClick={mobileMenuVisible ? handleClick : null}
              >
                Program
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/contact"
                onClick={mobileMenuVisible ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link checkout-link"
                activeClassName="active"
                onClick={mobileMenuVisible ? handleClick : null}
                to="/cart"
              >
                <MdShoppingCart />
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
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(Navbar);
