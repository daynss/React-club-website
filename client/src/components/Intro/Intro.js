import React from "react";
import { connect } from "react-redux";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";

const Intro = ({ events }) => {
  const upcoming = events.filter((evt) => evt.category_id !== "private_event");

  return (
    <div className="intro">
      <div className="intro-wrapper">
        <div className="intro-description">
          <h1>Imaginarium Club</h1>
          <h3>Your favourite venue for gigs, parties, and gatherings.</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis.
          </p>
        </div>
      </div>
      <h3>Upcoming Events</h3>
      <UpcomingEvents events={upcoming.slice(0, 3)} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  events: state.events.eventItems,
});

export default connect(mapStateToProps, null)(Intro);
