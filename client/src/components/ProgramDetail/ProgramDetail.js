import React from "react";
import Artist from "../Artists/Artist";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import Button from "../BasicComponents/Button/Button";
import { MdShoppingCart } from "react-icons/md";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Cart/cartActions";
import Divider from "../BasicComponents/Divider/Divider";

const ProgramDetail = ({ addToCart, events, ...props }) => {
  const paramsId = props.match.params.id;
  const displayEvent = events && events.filter((obj) => obj.id === paramsId)[0];
  const similarEvents =
    events &&
    events.filter(
      (obj) =>
        obj.category_id === displayEvent.category_id &&
        obj.title !== displayEvent.title
    );

  return (
    <div className="program-detail">
      {events.length !== 0 && (
        <>
          <div className="program-detail-event">
            <div className="program-detail-event-header">
              <h2>{displayEvent.title}</h2>
              <h4>{displayEvent.category}</h4>
            </div>
            <div className="program-detail-event-image-wrapper">
              <img src={displayEvent.img} alt={displayEvent.title} />
            </div>
            <div className="program-detail-event-description">
              <Artist
                artists={displayEvent.artist}
                category={displayEvent.category_id}
              />
              <p>{displayEvent.description}</p>
              <div className="program-detail-event-info">
                <p>
                  When: &nbsp;
                  <span>{`${displayEvent.day} ${displayEvent.date} at ${displayEvent.time}`}</span>
                </p>
                <p>
                  Entry: &nbsp;
                  <span>
                    {`${displayEvent.entry}`}{" "}
                    {displayEvent.entry === "free" ? "" : <span> &euro;</span>}
                  </span>
                </p>
                <Divider />
                {displayEvent.entry !== "free" && (
                  <Button
                    label={"Add to Cart"}
                    renderIcon={<MdShoppingCart size={22} />}
                    onClick={() => addToCart(displayEvent)}
                  />
                )}
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <h4>Similar events</h4>
          <UpcomingEvents events={similarEvents} />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  events: state.events.eventItems,
});

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgramDetail);
