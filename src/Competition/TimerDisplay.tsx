import React from "react";
import {Divider, Typography, Paper, withStyles} from "@material-ui/core";

const TimerText = withStyles({
    root: {
        color: "#B3A369",
    },
})(Typography);

const TimerBackground = withStyles({
    root: {
        backgroundColor: "#212B31",
        width: "max-content",
        padding: "2rem",
        margin: "auto"
    },
})(Paper);

export default function TimerDisplay(props: any){
    return(
        <TimerBackground style={{width: "1024px"}}>
            <TimerText variant="h2" align="center">
                Countdown to Competition!
            </TimerText>
            <Divider style={{ backgroundColor: "#B3A369", margin: "1rem"}} variant="middle" />
            <TimerText variant="h2" align="center">
                {props.display}
            </TimerText>
        </TimerBackground>
    );
}