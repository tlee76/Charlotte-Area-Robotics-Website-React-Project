import React, { Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Outreach from "../Outreach/Outreach";
import { AppBar, Tabs, Tab } from "@material-ui/core"
import "./Main.scss";
import Sponsors from "../Sponsors/Sponsors";
import Competition from "../Competition/Competition";
import Archive from "../Archive/Archive";
import MainLogo from "../Images/CARLogoPrimary.png";

class Main extends Component {

  state = {
    value: 1,
  };

  handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({value: newValue});
  };
  
  render() {
    return (
      <BrowserRouter>
        <AppBar position="static" className="NavBar" style={{backgroundColor: "#212b31"}}>
          <Tabs centered value={this.state.value} onChange={this.handleChange}>
            <img src={MainLogo} width="45" height="45" alt="logo"/>
            <Tab className="NavBarSelection" label="Home" component={Link} to="/"/>
            <Tab className="NavBarSelection" label="About" component={Link} to="/about"/>
            <Tab className="NavBarSelection" label="Sponsors" component={Link} to="/sponsors"/>
            <Tab className="NavBarSelection" label="Competition" component={Link} to="/competition"/>
            <Tab className="NavBarSelection" label="Archive" component={Link} to="/archive"/>
          </Tabs>
        </AppBar>
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