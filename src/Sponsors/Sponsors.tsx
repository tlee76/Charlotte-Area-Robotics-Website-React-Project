import React from "react";
import { Typography, Card, Paper, makeStyles, withStyles, createStyles, Theme, IconButton } from "@material-ui/core";
import { Email } from "@material-ui/icons";
import { useCurrentWidth } from "react-socks";
import support from "../Images/roboSuport.png";
import bannerImg from "../Images/bannerCHA.jpg";
import { DocumentTitle } from "../Main/DocumentTitle";
import "./Sponsors.scss";
import Walmart from "./Walmart";
import SolidWork from "./SolidWork";
import Advanced from "./Advanced";
import Ctc from "./CTC";
import JoinTeam from "./JoinTeam";


const SponsorCard = withStyles({
    root: {
        display: "flex",
        fontFamily: "Inconsolata",
        textAlign: "center",
        backgroundColor: "inherit",
        borderRadius: "1rem",
        alignItems: "Center",
        boxShadow: "inset 0px 0px 9px 1px",
    },
})(Card);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        //Format sponsorType card
        tyCard: {
            width: "85%",
            display: "initial",
            gridArea: "tyTxt",
            padding: "10px",
            margin: "auto",
            backgroundColor: "#212b31",
            color: "#B3A369",
        },
        sectionCard: {
            display: "flex",
            color: "#212b31",
            boxShadow: "inset 0px 0px 9px 2px",
            opacity: .97,
            padding: "10px",
            margin: "auto auto auto 10rem",
        },
        SideCard: {
            display: "flex",
            color: "#212b31",
            backgroundColor: "#B3A369",
            boxShadow: "inset 0px 0px 23px 10px",
            padding: "10px",
            height: "100%",
            width: "auto",
        },
        divider: {
            margin: "10px",
        },
    }),
);


function Sponsors() {
    //Set the default sizing only used for (mobile version)
    const width = useCurrentWidth();
    const classes = useStyles();
    const max_width = width > 1000 ? "19rem" : "";
    const card_margin = width > 1000 ? "" : "10px";

    //Used to set website tab name
    DocumentTitle({ title: "Sponsors" });

    return (
        //Create a div for page container
        <div className={width > 1000 ? "sponsors-container" : "sponsors-container-mobile"}>

            {/* Banner Image */}
            <img src={bannerImg} className="banner" alt="Banner" />

            {/* Thank You Text */}
            <Paper className={classes.tyCard} elevation={24} >
                <Typography align="center" className="ty-text" variant="h4">
                    - Thank You To Our Sponsors For Their Support! -</Typography>
            </Paper>

            {/* HandShake Image */}
            {/*"https://www.pngkey.com/detail/u2q8i1w7q8w7e6w7_04-apr-robotic-process-automation-robot-and-human/*/}
            <img src={support} className="handshakeImg" alt="HandShake" />

            {/* leftSide Card */}
            <SponsorCard className="leftCard" style={{ gridArea: "leftCard", backgroundColor: "#B3A369", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin }}>
                <Typography align="center" variant="h5">
                    Interested In Sponsoring?<br />
                </Typography>
            </SponsorCard>

            {/* rightSide Card */}
            <SponsorCard className="rightCard" style={{ gridArea: "rightCard", backgroundColor: "#B3A369", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin }}>
                <Typography align="center" variant="h5">
                    Please Contact Sam Luu
                    <IconButton href="mailto:car-robotics@uncc.edu/" target="_blank">
                        <Email fontSize="large" htmlColor="#212b31" />
                    </IconButton>
                </Typography>
            </SponsorCard>


            {/* GOLD Sponsors Section */}
            <Paper className={classes.sectionCard} style={{ gridArea: "sec1", backgroundColor: "#B3A369", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin }}>
                {/* GOLD Sponsors Description */}
                <Typography align="center" className="desc cBlack" style={{ marginLeft: 20, marginRight: 20 }}>
                    <Typography component="p" className="secTitle" variant="h4">Gold Level:<br />($250+)</Typography>
                    <Typography component="p" variant="h5" className="leftAlign">Includes:</Typography>
                    <Typography component="ul">
                        <Typography style={{ fontFamily: "Inconsolata" }} component="li">Your Companys Logo On Clubs Shirts</Typography>
                        <Typography style={{ fontFamily: "Inconsolata" }} component="li">Logo On Club Merchendise</Typography>
                        <Typography style={{ fontFamily: "Inconsolata" }} component="li">Same Benefits As The Silver &amp; Green Level Sponsorship</Typography>
                    </Typography>
                </Typography>
            </Paper>

            {/* GOLD Sponsors Cards */}
            <SponsorCard className="gSpon" style={{ gridArea: "gSpon1", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin }}>
                <Walmart classes={classes} />
            </SponsorCard>
            <SponsorCard className="gSpon" style={{ gridArea: "gSpon2", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin }}>
                <SolidWork classes={classes} />
            </SponsorCard>
            <SponsorCard className="gSpon" style={{ gridArea: "gSpon3", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin }}>
                <JoinTeam classes={classes} />
            </SponsorCard>


            {/*SILVER Sponsors Section */}
            <Paper className={classes.sectionCard} style={{ gridArea: "sec2", backgroundColor: "#A9A9A9", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin }}>
                {/* Silver Sponsors Description */}
                <Typography align="center" className="desc cBlack" style={{ marginLeft: 20, marginRight: 20 }}>
                    <Typography component="p" className="secTitle" variant="h4">Silver Level:<br />($100+)</Typography>
                    <Typography component="p" variant="h5" className="leftAlign">Includes:</Typography>
                    <Typography component="ul">
                        <Typography style={{ fontFamily: "Inconsolata" }} component="li">Logo On All Of Our Robots</Typography>
                        <Typography style={{ fontFamily: "Inconsolata" }} component="li">A Shout Out Before Any Robot Public Demonstrations</Typography>
                        <Typography style={{ fontFamily: "Inconsolata" }} component="li">Same Benefits As The Green Level Sponsorship</Typography>
                    </Typography>
                </Typography>
            </Paper>
            {/* Sponsors Cards */}
            <SponsorCard className="gSpon" style={{ gridArea: "sSpon1", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin }}>
                <Advanced classes={classes} />
            </SponsorCard>
            <SponsorCard className="gSpon" style={{ gridArea: "sSpon2", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin }}>
                <Ctc classes={classes} />
            </SponsorCard>

            {/* GREEN Sponsors Section */}
            <Paper className={classes.sectionCard} style={{ gridArea: "sec3", backgroundColor: "#2d855f", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin }}>
                {/* Green Sponsors Description */}
                <Typography align="center" className="desc cBlack" variant="h5" style={{ marginLeft: 20, marginRight: 20 }}>
                    <Typography component="p" className="secTitle" variant="h4">Green Level:<br />($-100)</Typography>
                    <Typography component="p" variant="h5" className="leftAlign">Includes:</Typography>
                    <Typography component="ul">
                        <Typography style={{ fontFamily: "Inconsolata" }} component="li">Logo &amp; Link To Your Company's Website Will Be Displayed On CAR'S Sponsors Page</Typography>
                    </Typography>
                </Typography>
            </Paper>
            {/* Sponsors Cards */}

            <SponsorCard className="gSpon" style={{ gridArea: "grSpon1", maxWidth: max_width, marginLeft: card_margin, marginRight: card_margin }}>
                <JoinTeam classes={classes} />
            </SponsorCard>

        </div>
    );
}

export default Sponsors;