import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import AccountDetails from './AccountDetails';
import  DetailsConfirmation  from './DetailsConfirmation';
import OtpVerification from './OtpVerification';
import  Completed  from './Completed';
import Flow from "../../../components/Flow"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const mapStateToProps = state => ({
  transfer: state.transfer
});

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(2)
  },
  grid: {
    padding: theme.spacing(0, 2, 1)
  }
}));

const Transfer = (props) => {
  const classes = useStyles();
  const { transfer } = props
  return (
    <div className={classes.root}>
     <Button className={classes.backButton} startIcon={<ArrowBackIcon />}>
          Back
      </Button>
      <Grid container justify="flex-start" align="flex-start" className={classes.grid}>
        <Grid item xs={12} sm={4}>
          <Flow />
        </Grid>
        <Grid item xs={12} sm={8}>
          {
            transfer.route === "" && (
              <AccountDetails />
            )
          }
          {
            transfer.route === "transferConfirmation" && (
            <DetailsConfirmation />
          )}
          {
            transfer.route === "transferVerification" && (
            <OtpVerification />
          )}
          {
            transfer.route === "completes" && (
            <Completed />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(mapStateToProps)(Transfer);
