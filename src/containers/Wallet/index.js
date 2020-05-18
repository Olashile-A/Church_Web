import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography, Button } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import Tab from './Tab';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5)
  },

}));



const Wallet = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Tab />
    </Container>
  );
};

export default Wallet;
 