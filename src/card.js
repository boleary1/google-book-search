import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
// import { SkipPreviousIcon, PlayArrowIcon, SkipNextIcon } from '@material-ui/icons/SkipPrevious';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: "90%"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
}));

export default function MediaControlCard(props) {
    console.log(props)
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image="/static/images/cards/live-from-space.jpg"
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.volumeInfo.title}
          </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                    {props.volumeInfo.authors}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
                    {props.volumeInfo.description}
          </Typography>
          <button><a href={props.volumeInfo.canonicalVolumeLink}>More Info</a> </button> 
          {props.typeBtn=== "Save" ? <button onclick={console.log("save clicked")}>Save</button> : <button onclick={console.log("delete clicked")}>Delete</button>}
                </CardContent>

            </div>

        </Card>
    );
}