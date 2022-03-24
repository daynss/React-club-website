import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import Button from "../BasicComponents/Button/Button";
import Divider from "../BasicComponents/Divider/Divider";
import { addItemToCart } from "../../redux/Cart/cartActions";

const EventCard = ({ key, order, evt, addItemToCart }) => {
  const { title, img, day, date, time, entry, category_id } = evt;

  return (
    <div className="Event-card">
      <div className={`event-image ${img ? "" : "empty"}`}>
        {category_id !== "private_event" && (
          <Link to={`/detail/${order}`}>
            <img src={img} alt={title} />
          </Link>
        )}
      </div>
      <div className={`event-content`}>
        <h2>{title}</h2>
        <div>
          <span>
            {day}, {date} {time ? "at " + time : " "}
          </span>
          <Divider />
          {entry === "free" && <span>Entry: free</span>}
          {entry && entry !== "free" && <span>Entry: {entry}&euro; </span>}
          <Divider />
          {category_id !== "private_event" && (
            <Link to={`/detail/${order}`}>
              <span className="detail-link">Read more</span>
            </Link>
          )}
        </div>
        {category_id !== "private_event" && entry !== "free" && (
          <div className="event-content-button-wrapper">
            <Button
              label={"Add to Cart"}
              renderIcon={<MdShoppingCart size={22} />}
              onClick={() => addItemToCart(evt.id)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (itemId) => dispatch(addItemToCart(itemId)),
});

export default connect(null, mapDispatchToProps)(EventCard);
