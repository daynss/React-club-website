import React from "react";
import { Link } from "react-router-dom";

const UpcomingEvents = (props) => {
  return (
    <div className="UpcomingEvents">
      {props.events.map((event) => {
        console.log(event);
        const { title, id, img, day, date } = event;
        return (
          <div className="UpcomingEvent">
            <div className="upcoming-img">
              <img src={img} alt={title} />
            </div>
            <div className="upcoming-body">
              <div className="upcoming-body-text">
                <h3>{title}</h3>
                <p>
                  {day} {date}{" "}
                </p>
                <Link to={`/detail/${id}`}>
                  <p className="detail-link">Read more</p>
                </Link>
              </div>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default UpcomingEvents;
