import React, {useContext} from 'react';

import { UserContext} from './UserContext';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
      color: '#ffffff'
    }
}));

const Myresult = ({data}) => {

    const [store] = useContext(UserContext);
    const classes = useStyles();
    
    const artist = data ? data.Artist[0].Name : 'none';

    return (
        <div>
            { data && ( 
                <h2>Aritst is {artist}</h2>           
            )
            }
        </div>
    )

}

export default Myresult;