import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Program from '../Program/Program';
import Tickets from '../Tickets/Tickets';
import Contact from '../Contact/Contact';
import ProgramDetail from '../ProgramDetail/ProgramDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/program" component={Program} />
          <Route path="/tickets" component={Tickets} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/detail/:id" component={ProgramDetail} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
