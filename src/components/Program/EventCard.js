import React from 'react';
import {Link} from 'react-router-dom';
import Artist from '../Artists/Artist';

const EventCard = ({
                       order, title, img,
                       day, date, time, entry,
                       artists, category
                   }) => {

    let contentClass = "event-content";

    order % 2 !== 0 ? contentClass += " odd" : contentClass += " even";

    return (
        <div className="Event-card">
            <div className="event-image">
                <Link to={`/detail/${order}`}>
                    <img src={img} alt={title}/>
                </Link>
            </div>
            <div className={contentClass}>
                <h3>{category}</h3>
                <h2>{title}</h2>
                <Artist category={category} artist={artists}/>
                <p>When: {day} {date} at {time} </p>
                <p>Entry: {' '}
                    {entry} {entry === "free" ? null : <span>&euro;</span>}
                </p>
                <Link to={`/detail/${order}`}>
                    <p className="detail-link">Read more</p>
                </Link>
            </div>
        </div>
    );
};

export default EventCard;