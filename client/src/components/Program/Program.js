import React from "react";
import { connect } from "react-redux";
import EventCard from "./EventCard";

const Program = ({ events }) => {
  const eventCards = events.map((evt) => <EventCard key={evt.id} evt={evt} />);
  return (
    <div className="program-outline">
      <h2>August 2022</h2>
      {eventCards}
    </div>
  );
};

const mapStateToProps = (state) => ({
  events: state.events.eventItems,
});

export default connect(mapStateToProps, null)(Program);
