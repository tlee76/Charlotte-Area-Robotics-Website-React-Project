import React from "react";
import { Typography, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";
import "./Sponsors.scss";
import solidLogo from "../Images/solid.jpg";


export default function Interest(props: any) {
    return (
        <Typography>
            <EasyToSeeTooltip title="https://www.solidworks.com/">
                <Link href="https://www.solidworks.com/" target="_blank">
                    <div className="container">
                        <img src={solidLogo} className="sponsorLogo borderColorBlack" alt="SolisWorks Software" />
                        <div className="overlay backgroundBlack">
                            <div className="middleText cGold">Learn More</div>
                        </div>
                    </div>
                </Link>
            </EasyToSeeTooltip>
        </Typography>
    );
}    