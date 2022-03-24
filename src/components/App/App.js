import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Program from "../Program/Program";
import Contact from "../Contact/Contact";
import ProgramDetail from "../ProgramDetail/ProgramDetail";
import Cart from "../Cart/Cart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/program" component={Program} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/detail/:id" component={ProgramDetail} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
