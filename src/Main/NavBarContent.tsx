import React from "react";
import { Tabs, Tab, IconButton, withStyles } from "@material-ui/core";
import { Feedback } from "@material-ui/icons";
import { Link } from "react-router-dom";
import MainLogo from "../Images/CARLogoPrimary.png";
import EasyToSeeTooltip from "./EasyToSeeTooltip";

interface NavBarContentProps {
    handleFeedbackClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    classes: Record<"appbar" | "feedback" | "feedbackSidebar", string>,
    isSidebar: boolean,
}

//Custom Tabs component for styling
const NavTabs = withStyles({
    root: {
        margin: "auto",
    },
    indicator: {
        backgroundColor: '#B3A369',
        height: "4px",
    },
})(Tabs); //<- Uses Material UI Tabs component but overrides what's above

const getTabWithPath = () => {
    const path = window.location.pathname;
    if (path === "/about") return 2;
    if (path === "/sponsors") return 3;
    if (path === "/competition") return 4;
    if (path === "/outreach") return 5;
    if (path === "/archive") return 6;
    return 1;
}

export default function NavBarContent(props: NavBarContentProps) {
    const [value, setValue] = React.useState<number>(getTabWithPath()); //set index of 1 for default value which is Home tab
    const { handleFeedbackClick, classes, isSidebar } = props;

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <NavTabs orientation={isSidebar ? "vertical" : "horizontal"} scrollButtons="auto" variant="scrollable" value={value} onChange={handleChange}>
                <img style={{ alignSelf: "center" }} src={MainLogo} width={!isSidebar ? "70" : "130"} height={!isSidebar ? "70" : "130"} alt="logo" />
                <Tab className="NavBarSelection" label="Home" component={Link} to="/" />
                <Tab className="NavBarSelection" label="About" component={Link} to="/about" />
                <Tab className="NavBarSelection" label="Sponsors" component={Link} to="/sponsors" />
                <Tab className="NavBarSelection" label="Competition" component={Link} to="/competition" />
                <Tab className="NavBarSelection" label="Outreach" component={Link} to="/outreach" />
                <Tab className="NavBarSelection" label="Archive" component={Link} to="/archive" />
            </NavTabs>
            <EasyToSeeTooltip title="Feedback Button">
                <IconButton onClick={handleFeedbackClick} className={isSidebar ? classes.feedbackSidebar : classes.feedback}>
                    <Feedback style={{ color: "white" }} color="action" />
                </IconButton>
            </EasyToSeeTooltip>
        </>
    )
}