import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography, Button } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import Tab from './Tab';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },

}));



const EventPlanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tab />
    </div>
  );
};

export default EventPlanner;
