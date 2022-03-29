import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import Button from "../BasicComponents/Button/Button";
import LinkButton from "../BasicComponents/LinkButton/LinkButton";
import Divider from "../BasicComponents/Divider/Divider";
import { addToCart } from "../../redux/Cart/cartActions";

const EventCard = ({ evt, addToCart }) => {
  const { id, title, img, day, date, time, entry, category_id } = evt;

  return (
    <div className="Event-card">
      <div className={`event-image ${img ? "" : "empty"}`}>
        {category_id !== "private_event" && (
          <Link to={`/detail/${id}`}>
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
          {entry && entry !== "free" && <span>Entry: {entry} &euro; </span>}
          <Divider />
          {category_id !== "private_event" && (
            <LinkButton kind="ghost" label="Read more" href={`/detail/${id}`} />
            // <Link to={`/detail/${id}`}>
            //   <span className="detail-link">Read more</span>
            // </Link>
          )}
        </div>
        {category_id !== "private_event" && entry !== "free" && (
          <div className="event-content-button-wrapper">
            <Button
              label={"Add to Cart"}
              renderIcon={<MdShoppingCart size={22} />}
              onClick={() => addToCart(evt)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(EventCard);
