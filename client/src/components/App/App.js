import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getEventsList } from "../../redux/Events/eventActions";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Program from "../Program/Program";
import Contact from "../Contact/Contact";
import ProgramDetail from "../ProgramDetail/ProgramDetail";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";

const App = ({ getEventsList, events: { eventsLoading, eventsError } }) => {
  useEffect(() => {
    getEventsList();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/program" component={Program} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/detail/:id" component={ProgramDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => ({
  events: state.events,
});

const mapDispatchToProps = {
  getEventsList,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
