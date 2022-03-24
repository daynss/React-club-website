import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Divider from "../BasicComponents/Divider/Divider";
import { removeItemFromCart } from "../../redux/Cart/cartActions";
import events from "../Data/data";

const Cart = ({ cart: { cartItems }, removeItemFromCart }) => {
  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    const items = [];
    for (let key in cartItems) {
      events.forEach((evt) => {
        console.log(key);
        if (evt.id === Number(key)) {
          items.push({ ...evt, qty: cartItems[key].quantity });
        }
      });
    }
    setItemsInCart(items);
  }, []);

  return (
    <div className="cart">
      <div className="cart-list">
        {itemsInCart.map((item) => {
          const { order, title, day, date, time, entry, qty } = item;
          return (
            <div className="cart-list-item">
              <div className="cart-list-item-content">
                <div>
                  <Link to={`/detail/${order}`}>
                    <h2>{title}</h2>{" "}
                  </Link>
                  <span>
                    {day}, {date} {time ? "at " + time : " "}
                  </span>
                  <Divider />
                  <span>Entry: {entry}&euro; </span>
                  <Divider />
                </div>
                <div className="cart-list-item-quantity-selector">
                  <label for="quantity">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    value={qty}
                    onChange={(e) => console.log(e.target.value)}
                  />
                  {/* Quantity: {qty} */}
                  {/* create a number selector for quantity */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({ cart: state.cart });

const mapDispatchToProps = {
  removeItemFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
