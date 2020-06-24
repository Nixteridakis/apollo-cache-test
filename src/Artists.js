import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';

import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';
import {ARTISTS_QUERY} from './queries';

const Artists = () => {

    const { datas } = useQuery(ARTISTS_QUERY);
    const classes = useStyles();

    return(
      <ApolloProvider client={client}>
        <div className="artists-container">
            <Typography variant="h2">List of artists</Typography>
            <div className={classes.root}>
                <Pagination count={10} color="primary" />    
            </div>
        </div>
      </ApolloProvider>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

export default Artists