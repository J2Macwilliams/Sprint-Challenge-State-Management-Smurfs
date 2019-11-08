import React from "react";
import { connect } from "react-redux";
import { getBlue } from "../actions/index";

import { Grid, Card, Typography, makeStyles, Button } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,

    },

    card: {
        maxWidth: 300,
        margin: 7,
        padding: '2%'
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9

    },
    button: {
        fontSize: '1.6rem',
        background: 'blue',
        color: 'white',
        margin: '3%'

    }
}));

const SmurfList = (props) => {
    console.log("SmurfList", props);
    const classes = useStyles();
    return (
        <>
            <Typography style={{ color: 'blue' }}>
                I smurf, therefore I am.
        </Typography>

            <Button className={classes.button} onClick={() => props.dispatch(getBlue())}>Smurfs</Button>
            {props.isLoading && <div>spinner</div>}
            {props.error && <div>{props.error.message}</div>}
            <Grid container spacing={1}>

                {props.smurfs.map(blue => (
                    <Grid item key={blue.name} xs={6} sm={3} md={2}>
                        <Card  className={classes.card}>

                            <Typography variant="h4">
                                {blue.name}
                            </Typography>
                            <Typography variant="h5">
                                age: {blue.age}
                            </Typography>
                            <Typography variant="h5">
                                height: {blue.height} cm
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default connect(state => {
    return state;
})(SmurfList);