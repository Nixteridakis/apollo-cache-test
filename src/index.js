import React from 'react';
import App from './App';
import client from './client';

import { ApolloProvider } from '@apollo/react-hooks';

export default function Index (){
    return(   
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    )
}

// If you want your app to work offline and load faster, you can change                                                                                                                  
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
