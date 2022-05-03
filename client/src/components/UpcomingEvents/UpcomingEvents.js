import React from "react";
import { connect } from "react-redux";
import LinkButton from "../BasicComponents/LinkButton/LinkButton";
import Error from "../BasicComponents/Error/Error";

const UpcomingEvents = ({ events: { eventItems, eventsError } }) => {
  const upcomingEvents = eventItems
    .filter((evt) => evt.category_id !== "private_event")
    .slice(0, 3);

  return (
    <div className="upcomingEvents">
      {eventsError ? (
        <Error />
      ) : (
        <>
          {upcomingEvents.map((event) => {
            const { title, id, img, day, date } = event;
            return (
              <div key={id} className="upcomingEvent">
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
                      iconRight={true}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(mapStateToProps, null)(UpcomingEvents);
