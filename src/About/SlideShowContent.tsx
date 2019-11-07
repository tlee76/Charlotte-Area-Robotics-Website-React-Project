import React from "react";
import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import Robot from "../Images/Robot2.jpg";
import SprintReview23 from "../Images/SprintReviews/EndofSprint2-3.jpg";
import ArduinoWksp from "../Images/Outreach/ArduinoWksp-2.jpg";
import Logo from "../Images/CARLogoPrimary.png";

interface SlideShowContentProps {
    contentIndex: number,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            padding: "2rem",
            gridArea: "text",
            textAlign: "center",
            color: "#B3A369",
        },
        img: {
            margin: "auto",
            gridArea: "content",
        }
    }),
);

const SlideShowContentItems = [
    {
        text: "Charlotte Area Robotics is an UNCC Student Organization that competes anually in the IEEE SoutheastCon Hardware Competition",
        img: Logo,
        size: { width: "504px", height: "504px" }
    },
    {
        text: "We educate other students",
        img: ArduinoWksp
    },
    {
        text: "We educate each other",
        img: SprintReview23
    },
    {
        text: "We design, build, and test a robot to compete",
        img: Robot
    }
];

export default function SlideShowContent(props: SlideShowContentProps) {
    const classes = useStyles();

    const contentObject = SlideShowContentItems[props.contentIndex];

    return (
        <>
            <Typography variant="h3" className={classes.text} style={{ alignSelf: "center", lineHeight: "1.5em" }}>
                {contentObject.text}
            </Typography>
            <img className={classes.img} width={contentObject.size ? contentObject.size.width : "672px"} height={contentObject.size ? contentObject.size.height : "504px"} src={contentObject.img} alt="ContentImage" />
        </>
    );
}