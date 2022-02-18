import React from "react";
import EventCard from "./EventCard";
import events from "../Data/data";

const Program = () => {
  const eventCards = events.map((evt) => (
    <EventCard
      key={evt.id}
      order={evt.id}
      title={evt.title}
      img={evt.img}
      description={evt.description}
      day={evt.day}
      date={evt.date}
      time={evt.time}
      entry={evt.entry}
      artists={evt.artist}
      category_id={evt.category_id}
    />
  ));
  return (
    <div className="Program-outline">
      <h2>August 2022</h2>
      {eventCards}
    </div>
  );
};

export default Program;
