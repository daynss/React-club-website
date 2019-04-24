import React, { Component } from 'react';
import EventCard from './EventCard';
import events from '../Data/data';

class Program extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events
        }
    }

    render() {
        const eventCards = this.state.events.map(evt => (
            <EventCard key={evt.id} order={evt.id} title={evt.title} img={evt.img}
                description={evt.description} 
                day={evt.day} date={evt.date} 
                time={evt.time} entry={evt.entry} 
                artists={evt.artist} category={evt.category}/>
        ));
        return (
            <div className="Program-outline">
                <h2>August 2018</h2>
                    {eventCards}
            </div>
        );
    }
}

export default Program;