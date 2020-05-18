import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Tab from "./components/Tab"



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2,4)
  },
  
 
}));



const PrayerRequest = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

        <Tab />
    </div>
  );
};

export default PrayerRequest;
