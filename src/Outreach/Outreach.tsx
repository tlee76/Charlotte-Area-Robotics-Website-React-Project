import React from "react";
import { Typography, Card, Paper, makeStyles, withStyles, createStyles, Theme } from "@material-ui/core";
import { useCurrentWidth } from "react-socks";
import {DocumentTitle} from "../Main/DocumentTitle";
import banner from "../Images/outreachBan1.jpg";
import "./Outreach.scss";

//Used to define a variable of type card and style it
const SideCard = withStyles({
    root: {
        display: "flex",
        padding: "10px",
        fontFamily: "Inconsolata",
        backgroundColor: "#B3A369",
        color: "#212b31",
        width: "20rem",
        height: "20rem",
        textAlign: "center",
        borderRadius: "1rem",
    },
})(Card);

//Used For styling
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        bottomCard: {
            maxWidth: "50rem",
            display: "flex",
            backgroundColor: "#212b31",
            gridArea: "bottomTxt",
            padding: "10px",
            margin: "auto",
        },
        divider: {
            margin: "10px",
        },
    }),
);

//Function that actually creates the website
function Outreach() {
    //Set the default sizing only used for (mobile version)
    const width = useCurrentWidth();
    const classes = useStyles();
    const max_width = width > 1000 ? "15rem" : "";
    const card_margin = width > 1000 ? "" : "10px";

    //Used to set website tab name 
    DocumentTitle({title: "Outreach"});

    return (
        //Created a div to hold the entire website container
        <div className={width > 1000 ? "outReach-container" : "outReach-container-mobile"}>

            {/* Banner Image */}
            <img src={banner} className="banner" alt="Banner" />

            {/* Top Section */}
            <SideCard className = "leftCard" style={{ gridArea: "leftCard", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin}}>
                <Typography>This is a Side Card</Typography>
            </SideCard>


            <SideCard className = "rightCard" style={{ gridArea: "rightCard", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin}}>
                <Typography>This Is another Side Card</Typography>
            </SideCard>

            <Paper className={classes.bottomCard} elevation={24} style={{marginLeft: card_margin, marginRight: card_margin}}>
                <Typography align="center" className="more-text" variant="h4">
                    Our mission is to educate and to learn about all aspects of mobile robotics.
                    From the novice to the experienced, we welcome all students who are excited
                    to learn more about the field of robotics and apply the concepts they learn
                    in the classroom to real world applications.
                </Typography>
            </Paper>

        </div> //Closed the website container Div
    );
}

export default Outreach;
