import React from "react";
import { AppBar, Tabs, Tab, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import MainLogo from "../Images/CARLogoPrimary.png";
import "./Main.scss";

//Custom Tabs component for styling
const AntTabs = withStyles({
    root: {
        marginTop: "12px",
    },
    indicator: {
        backgroundColor: '#B8860B',
        height: "4px",
    },
})(Tabs); //<- Uses Material UI Tabs component but overrides what's above

export default function NavBar() {
    const [value, setValue] = React.useState(1); //set index of 1 for default value which is Home tab

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <AppBar position="static" className="NavBar" style={{ backgroundColor: "#212b31" }}>
            <AntTabs className="TabIndicator" centered value={value} onChange={handleChange}>
                <img src={MainLogo} width="55" height="55" alt="logo" />
                <Tab className="NavBarSelection" label="Home" component={Link} to="/" />
                <Tab className="NavBarSelection" label="About" component={Link} to="/about" />
                <Tab className="NavBarSelection" label="Sponsors" component={Link} to="/sponsors" />
                <Tab className="NavBarSelection" label="Competition" component={Link} to="/competition" />
                <Tab className="NavBarSelection" label="Archive" component={Link} to="/archive" />
            </AntTabs>
        </AppBar>
    )
}