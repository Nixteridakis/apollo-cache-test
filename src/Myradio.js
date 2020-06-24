import React, { useContext } from 'react';
import {UserContext } from './UserContext';

import { Radio, RadioGroup, FormControl, FormControlLabel } from '@material-ui/core';

const Myradio = (() => {
  
  const [store, setStore] = useContext(UserContext);

  return (
    <div>
    <FormControl component="fieldset">
      <RadioGroup default="1" aria-label="choices" name="choices" value={store} onChange={()=>setStore(event.target.value)}>
        <FormControlLabel value="1" control={<Radio />} label="First" />
        <FormControlLabel value="2" control={<Radio />} label="Second" />
        <FormControlLabel value="3" control={<Radio />} label="Third" />
      </RadioGroup>
    </FormControl>
    </div>
  );
})

export default Myradio;