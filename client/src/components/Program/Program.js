import React from "react";
import { connect } from "react-redux";
import EventCard from "./EventCard";
import Error from "../BasicComponents/Error/Error";

const Program = ({ events: { eventItems, month, year, eventsError } }) => {
  const eventCards = eventItems.map((evt) => (
    <EventCard key={evt.id} evt={evt} />
  ));
  return (
    <div className="program-outline">
      {eventsError && <Error />}
      {month && year && <h2>{`${month} ${year}`}</h2>}
      {eventCards}
    </div>
  );
};

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(mapStateToProps, null)(Program);
