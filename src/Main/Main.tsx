import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Outreach from "../Outreach/Outreach";
import Sponsors from "../Sponsors/Sponsors";
import Competition from "../Competition/Competition";
import Archive from "../Archive/Archive";
import NavBar from "./NavBar";


class Main extends Component {

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/outreach" component={Outreach} />
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/competition" component={Competition} />
          <Route path="/archive" component={Archive} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;