import React from "react";
import { Typography, Divider, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";

export default function Interest(props: any) {
    const { classes } = props;
    return (
        <Typography variant="h4">
            Interested in joining CAR?
            <Divider className={classes.divider} />
            <EasyToSeeTooltip title="https://ninerengage.uncc.edu/organization/car-robotics">
                <Link style={{color: "#046A38"}} target="_blank" href="https://ninerengage.uncc.edu/organization/car-robotics">
                    Visit our Niner Engage page!
                </Link>
            </EasyToSeeTooltip>
        </Typography>
    );
}