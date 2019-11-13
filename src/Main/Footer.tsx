import React from "react";
import { Typography, Link } from "@material-ui/core";
import "./Main.scss"
import { Email } from "@material-ui/icons";

export default function Footer() {
    return (
        <Typography variant="h5" className="footer">
            <Link color="inherit" style={{ textDecoration: "none" }} href="mailto:car-robotics@uncc.edu">
                Contact {<Email className="icon" fontSize="large" />} : car-robotics@uncc.edu
            </Link>
        </Typography>
    );
}