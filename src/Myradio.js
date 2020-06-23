import React, { useContext } from 'react';
import {UserContext } from './UserContext';

import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(theme => ({
    rootz: {
      color: '#ffffff'
    }
}));

const Myradio = (() => {
  
  const classes = useStyles();
  const [store, setStore] = useContext(UserContext);

  return (
    <FormControl component="fieldset">
      <RadioGroup default="1" aria-label="gender" name="choices" value={store} onChange={()=>setStore(event.target.value)}>
        <FormControlLabel value="1" control={<Radio />} label="First" />
        <FormControlLabel value="2" control={<Radio />} label="Second" />
        <FormControlLabel value="3" control={<Radio />} label="Third" />
      </RadioGroup>
    </FormControl>

  );
})

export default Myradio;