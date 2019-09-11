import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Outreach from "../Outreach/Outreach";
import { AppBar, Toolbar } from "@material-ui/core"
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <AppBar position="static">
          <Toolbar className="header">
            <NavLink to="/" className="NavBarSelection">Home</NavLink>
            <NavLink to="/about" className="NavBarSelection">About</NavLink>
            <NavLink to="/outreach" className="NavBarSelection">Outreach</NavLink>
          </Toolbar>
        </AppBar>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/outreach" component={Outreach} />
        </div>
      </HashRouter>
    );
  }
}

export default Main;