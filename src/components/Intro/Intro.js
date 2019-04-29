import React, { Component } from 'react';
import events from '../Data/data';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';

const upcoming = events.filter(evt => events.indexOf(evt) < 3 );

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upcomingEvents: []
        }
    };

    componentWillMount = () => {
        this.setState({
            upcomingEvents: upcoming
        });
    };

    render() {
        const currentEvents = this.state.upcomingEvents.map(evt => (
            <UpcomingEvents key={evt.id} order={evt.id}
                title={evt.title} img={evt.img}
                day={evt.day} date={evt.date}
                time={evt.time} entry={evt.entry} />
        ));

        return (
            <div className="Intro">
                <div className="intro-wrapper">
                    <div className="intro-description">
                        <h1>Imaginarium Club</h1>
                        <h3>Your favourite venue for gigs, parties, and gatherings.</h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis.
                        </p>
                    </div>
                </div>
                <div className="upcoming-events-overview">
                    <h3>Upcoming Events</h3>
                    <div className="upcoming-events-container">
                        {currentEvents}
                    </div>
                </div>
            </div>
        );
    }
}


export default Intro;