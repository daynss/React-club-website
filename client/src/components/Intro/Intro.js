import React from "react";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";

const Intro = () => {
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
      <UpcomingEvents />
    </div>
  );
};

export default Intro;
