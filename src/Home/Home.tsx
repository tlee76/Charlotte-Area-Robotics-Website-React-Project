import React from "react";
import { Typography, Card, Paper, makeStyles, withStyles, createStyles, Theme } from "@material-ui/core";
import { useCurrentWidth } from "react-socks";
import {DocumentTitle} from "../Main/DocumentTitle";
import logo from "../Images/CARLogoPrimary.png";
import "./Home.scss";
import Social from "./Social";
import Interest from "./Interest";

const SideCard = withStyles({
    root: {
        display: "flex",
        padding: "10px",
        fontFamily: "Inconsolata",
        backgroundColor: "#B3A369",
        color: "#212b31",
        margin: "auto",
        textAlign: "center",
        borderRadius: "1rem",
    },
})(Card);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        missionCard: {
            maxWidth: "50rem",
            display: "flex",
            backgroundColor: "#212b31",
            gridArea: "text",
            padding: "10px",
            margin: "auto",
        },
        divider: {
            margin: "10px",
        },
    }),
);

function Home() {
    const width = useCurrentWidth();
    const classes = useStyles();
    const max_width = width > 1000 ? "15rem" : "";
    const card_margin = width > 1000 ? "" : "10px";

    DocumentTitle({title: "Home"});

    return (
        <div className={width > 1000 ? "grid-container" : "grid-container-mobile"}>
        
            <SideCard style={{ gridArea: "social", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin}}>
                <Social classes={classes} />
            </SideCard>

            <img src={logo} className="logo" alt="Logo" />

            <SideCard style={{ gridArea: "interest", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin}}>
                <Interest classes={classes} />
            </SideCard>

            <Paper className={classes.missionCard} elevation={24} style={{marginLeft: card_margin, marginRight: card_margin}}>
                <Typography align="center" className="more-text" variant="h4">
                    Our mission is to educate and to learn about all aspects of mobile robotics.
                    From the novice to the experienced, we welcome all students who are excited
                    to learn more about the field of robotics and apply the concepts they learn
                    in the classroom to real world applications.
                </Typography>
            </Paper>

        </div>
    );
}

export default Home;