import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-boost';
import { HttpLink } from 'apollo-boost';

import {MAIN_QUERY} from './queries';
import { useQuery } from '@apollo/react-hooks';

//const link = new HttpLink({ uri : 'https://testing-hasura-me.herokuapp.com/v1/graphql'});
const link = createHttpLink({ uri: 'https://glikaki.herokuapp.com/v1/graphql', fetch: fetch });
const resolvers = {}
const cache = new InMemoryCache()

const client = new ApolloClient({ 
    cache, 
    link, 
    resolvers 
});



// let changed = true

// <INSERT INITIALIZATION CODE HERE>

// if (changed) {
//     client.writeQuery({
//         query: mainQuery,
//         data: cacheData,
//     })
// }

// const { mydata } = client.readQuery({
//     query: gql`
//       query myQuery {
//         Artist {
//           Name
//           ArtistId
//         }
//         Album {
//           Title
//           AlbumId
//         }
//       }
//     `,
//   });

export default client;