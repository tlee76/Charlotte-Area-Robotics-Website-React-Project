import React from "react";
import { Typography, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";
import "./Sponsors.scss";
import ctcLogo from "../Images/child.png";


export default function Interest(props: any) {
    return (
        <Typography>
            <EasyToSeeTooltip title="https://www.ctcharlotte.org/Online/default.asp">
                <Link style={{ color: "#166837" }} href="https://www.ctcharlotte.org/Online/default.asp" target="_blank">
                    <div className="container">
                        <img src={ctcLogo} className="sponsorLogo borderColorBlack" alt="Advanced Circuits" />
                        <div className="overlay backgroundBlack">
                            <div className="middleText cGold">Learn More</div>
                        </div>
                    </div>
                </Link>
            </EasyToSeeTooltip>
        </Typography>
    );
}    