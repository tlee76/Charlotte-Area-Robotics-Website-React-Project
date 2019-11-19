import React from "react";
import { Typography, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";
import "./Sponsors.scss";
import walmartLogo from "../Images/walmart.png";


export default function Interest(props: any) {
    return (
        <Typography>
            <EasyToSeeTooltip title="https://www.walmart.com/">
                <Link style={{ color: "#166837" }} href="https://www.walmart.com/" target="_blank">
                    <div className="container">
                        <img src={walmartLogo} className="sponsorLogo borderColorBlack" alt="Walmart" />
                        <div className="overlay backgroundBlack">
                            <div className="middleText cGold">Learn More</div>
                        </div>
                    </div>
                </Link>
            </EasyToSeeTooltip>
        </Typography>
    );
}    