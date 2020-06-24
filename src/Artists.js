import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';

import {ARTISTS_QUERY} from './queries';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client'

const ArtistsList = () => {

    const { data } = useQuery(ARTISTS_QUERY);
    const classes = useStyles();

    console.log(data)

    return(
        <div className="artists-container">
            <Typography variant="h2">List of artists</Typography>
            <div className={classes.root}>
                <Pagination count={10} color="primary" />    
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

export default function Artists (){
  return(    
    <ApolloProvider client={client}>
      <ArtistsList/>
    </ApolloProvider>)
};