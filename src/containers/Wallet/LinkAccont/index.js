import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import AccountCardDetails from './AccountCardDetails';
import  DetailsConfirmation  from './DetailsConfirmation';
import OtpVerification from './OtpVerification';
import  Completed  from './Completed';


const mapStateToProps = state => ({
  wallet: state.wallet
});

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const LinkAccount = (props) => {
  const classes = useStyles();
  const { wallet } = props
  return (
    <div className={classes.root}>
      {
        wallet.route === "details" && (
          <AccountCardDetails />
        )
      }
      {
        wallet.route === "confirmation" && (
        <DetailsConfirmation />
      )}
      {
        wallet.route === "verification" && (
        <OtpVerification />
      )}
      {
        wallet.route === "complete" && (
        <Completed />
      )}
    </div>
  );
};

export default connect(mapStateToProps)(LinkAccount);
