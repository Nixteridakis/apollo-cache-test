import React, {useState} from 'react';
import { Button } from '@material-ui/core';

import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link' ;

import {MAIN_QUERY, MAIN_QUERY_CACHE} from './queries';
import client from './client'

import Myradio from './Myradio'
import Myresult from './Myresult.js'
import { UserContext } from './UserContext';

const App = () => {
  const [store, setStore] = useState([]);
  const [cachedArtist, setArtist] = useState('');

  const { data } = useQuery(MAIN_QUERY,{
    variables: {
      artistId : store
    }
  });


  const ReadmyQyery = (id) => {
    const myCache = client.readQuery({
      query: MAIN_QUERY,
      variables: { artistId : id }
    });
    setArtist(myCache.Artist[0].Name)
  }


  return (
    <UserContext.Provider value={[store,setStore]}>
      <div className="App">
        <header className="App-header"> Select an artist</header>
        <Myradio />
        <Myresult data={data}/>
        <Button variant="contained" onClick={()=> ReadmyQyery('1')}>Read Cached Artist 1</Button>
        <Button variant="contained" onClick={()=> ReadmyQyery('2')}>Read Cached Artist 2</Button>
        <Button variant="contained" onClick={()=> ReadmyQyery('3')}>Read Cached Artist 3</Button>
        <div className="cached">
          <h4>Cached: </h4><h3>{cachedArtist}</h3> </div>
        <Link href="/artists">
          <Button size="large" variant="outlined" color="secondary">See all Artists</Button>
        </Link>
      </div>
    </UserContext.Provider>
  );
}

export default App;