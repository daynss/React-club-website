import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "../BasicComponents/LinkButton/LinkButton";

const UpcomingEvents = (props) => {
  return (
    <div className="UpcomingEvents">
      {props.events.map((event) => {
        const { title, id, img, day, date } = event;
        return (
          <div key={id} className="UpcomingEvent">
            <div className="upcoming-img">
              <img src={img} alt={title} />
            </div>
            <div className="upcoming-body">
              <div className="upcoming-body-text">
                <h3>{title}</h3>
                <p>
                  {day} {date}{" "}
                </p>
                <LinkButton
                  kind="ghost"
                  label="Read more"
                  href={`/detail/${id}`}
                />
              </div>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default UpcomingEvents;
