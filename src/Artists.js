import React, {useState} from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Pagination} from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));


const Artists = () =>{
    const classes=useStyles();

    return(
        <div className="artists-container">
            <Typography variant="h2">List of artists</Typography>
            <div className={classes.root}>
                <Pagination count={10} color="primary" />    
            </div>
        </div>
    )
}

export default Artists