import React from "react";
import { Typography, Divider, IconButton } from "@material-ui/core";
import { Instagram, Facebook } from "@material-ui/icons";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";

export default function Social(props: any) {
    const { classes } = props;
    return (
        <div>
            <Typography variant="h4">
                Support us on Social Media or Donate!
            </Typography>
            <Divider className={classes.divider} />
            <EasyToSeeTooltip title="https://www.instagram.com/car_robotics/">
                <IconButton href="https://www.instagram.com/car_robotics/" target="_blank">
                    <Instagram fontSize="large" color="action" />
                </IconButton>
            </EasyToSeeTooltip>
            <EasyToSeeTooltip title="https://www.facebook.com/CharlotteAreaRobotics/">
                <IconButton href="https://www.facebook.com/CharlotteAreaRobotics/" target="_blank">
                    <Facebook fontSize="large" color="action" />
                </IconButton>
            </EasyToSeeTooltip>
            <EasyToSeeTooltip title="PayPal - The safer, easier way to pay online!">
                <form action="https://www.paypal.com/cgi-bin/webscr" target="_blank" method="post">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="FBMKDCDK2PUXN" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt="Donate with PayPal button" />
                    <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </EasyToSeeTooltip>
        </div>
    );
}