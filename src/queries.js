import gql from 'graphql-tag';

// export const MAIN_QUERY = gql`{
//     Artist {
//       Name
//       ArtistId
//     }
// }`;


export const MAIN_QUERY = gql`
  query($artistId: Int ) {
    Artist(where: {ArtistId: {_eq: $artistId}}){
      Name
      ArtistId
    }
  }
`;

export const MAIN_QUERY_CACHE = gql`
  query {
    Artist {
      Name
      ArtistId
    }
  }
`;

// const GET_DOG_PHOTO = gql`
//   query Dog($breed: String!) {
//     dog(breed: $breed) {
//       id
//       displayImage
//     }
//   }
// `;

export const mainQueryCache = gql`{
  Artist @client {
    Name
    ArtistId
  }
  Album @client {
    Title
    AlbumId
  }
}
`;