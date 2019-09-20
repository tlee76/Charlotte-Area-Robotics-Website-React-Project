import React from "react";
import { Typography, Divider, IconButton } from "@material-ui/core";
import { Instagram, Facebook } from "@material-ui/icons";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";

export default function Social(props: any) {
    const { classes } = props;
    return (
        <Typography variant="h4">
            Follow us on social media!
            <Divider className={classes.divider} />
            <EasyToSeeTooltip title="https://www.instagram.com/car_robotics/">
                <IconButton href="https://www.instagram.com/car_robotics/">
                    <Instagram fontSize="large" color="action" />
                </IconButton>
            </EasyToSeeTooltip>
            <EasyToSeeTooltip title="https://www.facebook.com/CharlotteAreaRobotics/">
                <IconButton href="https://www.facebook.com/CharlotteAreaRobotics/">
                    <Facebook fontSize="large" color="action" />
                </IconButton>
            </EasyToSeeTooltip>
        </Typography>
    );
}