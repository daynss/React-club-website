import React from 'react';
import { Link } from 'react-router-dom';
import './UpcomingEvents.css';

const UpcomingEvents = (props) => {
    const { title, order, img, day, date } = props;
    return (
        <div className="UpcomingEvent">
            <div className="upcoming-img">
                <img src={img} alt={title} />
            </div>
            <div className="upcoming-body">
                <div className="upcoming-body-text">
                    <h3>{title}</h3>
                    <p>{day} {date} </p>
                    <Link to={`/detail/${order}`}>
                        <p>Read more</p>
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default UpcomingEvents;