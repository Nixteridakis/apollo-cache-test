import React, { useState } from 'react';
import Link from 'next/link' ;

import { Typography, List, ListItem, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';

import { useQuery } from '@apollo/react-hooks';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client'
import {ARTISTS_QUERY} from './queries';

const ArtistsList = () => {

    const limit = 10;
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const [offset, setOffset] = useState((page - 1) * limit);
    const { data } = useQuery(ARTISTS_QUERY,{
      variables: {
        offset,
        limit,
      },
      // fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
    });

    console.log(data)

    const handlePageChange = (event, value) => {
      setPage(value);
      setOffset((value - 1) * limit);
    };

    const count = data?.Artist_aggregate.aggregate.count ;
    const totalPages = Math.ceil(count / limit);

    const artist = data?.Artist.map((x,index) => {
      return(
        <ListItem key={x.ArtistId}>{x.Name}</ListItem>
      )
    })

    return(
      <div className="artists-container">
          <Typography variant="h2">List of artists</Typography>
          <div className={classes.root}>
          <List>{artist}</List>
          <Pagination 
            count={totalPages} 
            page={page}
            color="primary" 
            onChange={handlePageChange}
            />    
          </div>
          <Link href="/"><Button size="large" variant="outlined" color="secondary" className="goBack">HOME</Button></Link>
      </div>
    )
}

export default function Artists (){
  return(    
    <ApolloProvider client={client}>
      <ArtistsList/>
    </ApolloProvider>)
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));