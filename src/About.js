import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import {mainQuery} from './queries';


import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';


export default function About (){
  
  const { data } = useQuery(mainQuery);

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>This is the about page</h1>
        <h3>  I hold { data ? data.Artist.length : 'No' } Artists </h3>
      </div>
    </ApolloProvider>
  )
};

