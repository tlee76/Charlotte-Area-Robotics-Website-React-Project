import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Outreach from "../Outreach/Outreach";
import { AppBar, Toolbar } from "@material-ui/core"
import "./Main.scss";
import Sponsors from "../Sponsors/Sponsors";
import Competition from "../Competition/Competition";
import Archive from "../Archive/Archive";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <AppBar position="static">
          <Toolbar className="header">
            <NavLink to="/" className="NavBarSelection">Home</NavLink>
            <NavLink to="/about" className="NavBarSelection">About</NavLink>
            <NavLink to="/sponsors" className="NavBarSelection">Sponsors</NavLink>
            <NavLink to="/outreach" className="NavBarSelection">Outreach</NavLink>
            <NavLink to="/competition" className="NavBarSelection">Competition</NavLink>
            <NavLink to="/archive" className="NavBarSelection">Archive</NavLink>
          </Toolbar>
        </AppBar>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/outreach" component={Outreach} />
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/competition" component={Competition} />
          <Route path="/archive" component={Archive} />
        </div>
      </HashRouter>
    );
  }
}

export default Main;