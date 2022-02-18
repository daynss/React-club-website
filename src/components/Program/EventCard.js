import React from "react";
import { Link } from "react-router-dom";
import Artist from "../Artists/Artist";

const EventCard = ({
  order,
  title,
  img,
  day,
  date,
  time,
  artists,
  category_id,
}) => (
  <div className="Event-card">
    <div className={`event-image ${img ? "" : "empty"}`}>
      {category_id !== "private_event" && (
        <Link to={`/detail/${order}`}>
          <img src={img} alt={title} />
        </Link>
      )}
    </div>
    <div className={`event-content ${order % 2 !== 0 ? "odd" : "even"}`}>
      <p>
        {day}, {date} at {time}{" "}
      </p>
      <h2>{title}</h2>
      <Artist category={category_id} artist={artists} />
      {category_id !== "private_event" && (
        <Link to={`/detail/${order}`}>
          <p className="detail-link">Read more</p>
        </Link>
      )}
    </div>
  </div>
);

export default EventCard;
