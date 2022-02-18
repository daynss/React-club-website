import React from "react";
import { Link } from "react-router-dom";
import events from "../Data/data";
import Artist from "../Artists/Artist";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import Button from "../BasicComponents/Button/Button";

const ProgramDetail = (props) => {
  const paramsId = parseInt(props.match.params.id, 10);
  const displayEvent = events.filter((obj) => obj.id === paramsId)[0];
  const similarEvents = events.filter(
    (obj) =>
      obj.category_id === displayEvent.category_id &&
      obj.title !== displayEvent.title
  );

  return (
    <>
      <div className="program-detail">
        <div className="program-detail-header">
          <h2>{displayEvent.title}</h2>
          <h4>{displayEvent.category}</h4>
        </div>
        <div className="program-detail-image-wrapper">
          <img src={displayEvent.img} alt={displayEvent.title} />
        </div>
        <div className="program-detail-description">
          <Artist
            artist={displayEvent.artist}
            category={displayEvent.category_id}
          />
          <p>{displayEvent.description}</p>
          <div className="program-detail-info">
            <p>
              <span>{`${displayEvent.day} ${displayEvent.date} / ${displayEvent.time} / ${displayEvent.entry}`}</span>
              {displayEvent.entry === "free" ? "" : <span>&euro;</span>}
            </p>
            {displayEvent.entry !== "free" && <Button label="Buy Tickets" />}
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <h4>Similar events</h4>
      <UpcomingEvents events={similarEvents} />
    </>
  );
};

export default ProgramDetail;
