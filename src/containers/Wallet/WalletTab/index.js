import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container } from '@material-ui/core';
import Icon from "@material-ui/core/Icon";
import Warning from "@material-ui/icons/Warning";
import {
  LinkBank,
  MonthlyProgress,
  Donations,
  RecentDonation
} from '../components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const WalletTab = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={1}  direction='row'>
          <Grid item sm={6} xs={12} >
            <Donations />
          </Grid>
          <Grid item sm={6} xs={12} >
            <LinkBank />
          </Grid>
          <Grid item sm={8} xs={12} >
            <MonthlyProgress />
          </Grid>
          <Grid item sm={4} xs={12} >
            <RecentDonation />
          </Grid>
        </Grid>
    </div>
  );
};

export default WalletTab;
