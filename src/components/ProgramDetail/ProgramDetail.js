import React from 'react';
import { Link } from 'react-router-dom';
import events from '../Data/data';
import Artist from '../Artists/Artist';

const ProgramDetail = props => {
    const paramsId = parseInt(props.match.params.id, 10);
    const displayEvent = events.filter(obj => obj.id === paramsId)[0];

    return (
        <div className="Program-detail">
            <div className="detail-container">
                <div className="detail-header">
                    <h2>{displayEvent.title}</h2>
                    <h4>{displayEvent.category}</h4>
                    <div className="detail-image-wrapper">
                        <img src={displayEvent.img} alt={displayEvent.title} />
                    </div>
                </div>
                <div className="detail-body">
                    <div className="detail-description">
                        <Artist artist={displayEvent.artist} category={displayEvent.category} />
                        <p>{displayEvent.description}</p>
                    </div>
                    <div className="detail-info">
                        <p>
                            <span>{`${displayEvent.day} ${displayEvent.date} / ${displayEvent.time} / ${displayEvent.entry}`}</span>
                            {displayEvent.entry === "free" ? '' :  <span>&euro;</span>}
                        </p>
                    </div>
                </div>
            </div>
            <div className="similar-events-container">
                <h4>Similar events</h4>
                <div className="event-items-container">
                    {events.map((event) => {
                        if (event.category === displayEvent.category && event.title !== displayEvent.title) {
                            return (
                                <div key={event.id} className="event-item">
                                    <div className="item-image-wrapper">
                                        <img src={event.img} alt={event.title} />
                                    </div>
                                    <div className="item-body">
                                        <h3>{event.title}</h3>
                                        <p>{event.date}</p>
                                        <Artist artist={event.artist} category={event.category} />
                                    </div>
                                    <Link to={`/detail/${event.id}`}>
                                        <p id="link-more">Read more</p>
                                    </Link>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProgramDetail;