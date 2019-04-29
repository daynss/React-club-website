import React from 'react';
import { Link } from 'react-router-dom';
import events from '../Data/data';

const Tickets = () => {
    const eventPrices = events.map(evt => (
        <tr key={evt.id}>
            <td>
                <Link style={{ "color": "#000" }} 
                    to={`/detail/${evt.id}`}> 
                    {evt.title} 
                </Link>
            </td>
            <td> {evt.entry}
                {evt.entry === "free" ? null : <span>&euro;</span>}
            </td>
        </tr>
    ));

    return (
        <div className="Tickets">
            <div className="tickets-header">
                <div className="tickets-info">
                    <h1>Tickets</h1>
                    <p>All tickets have to be purchased on spot.</p>
                    <p>There is currently no possibility to buy tickets online in advance.</p>
                </div>
            </div>
            <div className="tickets-events">
                <h3>Entry prices for the upcoming events</h3>
                <h4>August 2018</h4>
                <div className="tickets-events-table">

                </div>
                <table>
                    <tbody>
                        {eventPrices}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tickets;