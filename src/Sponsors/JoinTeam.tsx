import React from "react";
import { Typography } from "@material-ui/core";
import "./Sponsors.scss";
import joinTeam from "../Images/joinTeam.png";


export default function Interest(props: any) {
    return (
        <Typography>
            <div className="container">
                <img src={joinTeam} className="sponsorLogo borderColorBlack" alt="Join Team"/>
                    <div className = "overlay backgroundBlack">
                        <div className = "middleText cGold">You Could Be Here</div>
                    </div>
            </div>
        </Typography>
    );
}