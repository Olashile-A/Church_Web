import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import AccountDetails from './AccountDetails';
import  DetailsConfirmation  from './DetailsConfirmation';
import OtpVerification from './OtpVerification';
import  Completed  from './Completed';


const mapStateToProps = state => ({
  transfer: state.transfer
});

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const Transfer = (props) => {
  const classes = useStyles();
  const { transfer } = props
  return (
    <div className={classes.root}>
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
    </div>
  );
};

export default connect(mapStateToProps)(Transfer);
