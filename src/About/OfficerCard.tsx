import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography, makeStyles, Theme, createStyles, Divider } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";

export enum Officer {
    President = "President",
    VicePresident = "Vice President",
    Outreach = "Outreach",
    Treasurer = "Treasurer",
    Interim = "Interim VP",
    Developer = "Developer"
}

interface OfficerCardProps {
    image: string;
    officer: Officer;
    linkedIn: string;
    name: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        officerCard: {
            height: "400px",
            width: "250px",
            margin: "20px",
            backgroundColor: "#B3A369",
        },
        officerPicture: {
            height: "300px",
            backgroundColor: "#424242",
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
    }),
);

export default function OfficerCard(props: OfficerCardProps) {

    const classes = useStyles();
    return (
        <EasyToSeeTooltip title={props.linkedIn}>
            <Card className={classes.officerCard}>
                <CardActionArea href={props.linkedIn} target="_blank">
                    <CardMedia
                        image={props.image}
                        className={classes.officerPicture}
                    />
                    <CardContent>
                        <Typography align="center" variant="h5">
                            {props.officer}
                        </Typography>
                        <Divider />
                        <Typography align="center" variant="h6">
                            {props.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </EasyToSeeTooltip >
    );
}