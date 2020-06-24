import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-boost';

const link = createHttpLink({ uri: 'https://glikaki.herokuapp.com/v1/graphql', fetch: fetch });
const resolvers = {}
const cache = new InMemoryCache()

const client = new ApolloClient({ 
    cache, 
    link, 
    resolvers 
});


export default client;