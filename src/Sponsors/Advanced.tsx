import React from "react";
import { Typography, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";
import "./Sponsors.scss";
import advLogo from "../Images/Adv.png";


export default function Interest(props: any) {
    return (
        <Typography>
            <EasyToSeeTooltip title="https://www.4pcb.com/">
                <Link style={{ color: "#166837" }} href="https://www.4pcb.com/" target="_blank">
                    <div className="container">
                        <img src={advLogo} className="sponsorLogo borderColorBlack" alt="Advanced Circuits" />
                        <div className="overlay backgroundBlack">
                            <div className="middleText cGold">Learn More</div>
                        </div>
                    </div>
                </Link>
            </EasyToSeeTooltip>
        </Typography>
    );
}    