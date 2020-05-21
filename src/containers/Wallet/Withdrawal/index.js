import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import AccountDetails from './AccountDetails';
import  DetailsConfirmation  from './DetailsConfirmation';
import OtpVerification from './OtpVerification';
import  Completed  from './Completed';


const mapStateToProps = state => ({
  withdraw: state.withdraw
});

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const Withdrawal = (props) => {
  const classes = useStyles();
  const { withdraw } = props
  return (
    <div className={classes.root}>
      {
        withdraw.route === "detail" && (
          <AccountDetails />
        )
      }
      {
        withdraw.route === "withrawConfirmation" && (
        <DetailsConfirmation />
      )}
      {
        withdraw.route === "withdrawVerification" && (
        <OtpVerification />
      )}
      {
        withdraw.route === "completed" && (
        <Completed />
      )}
    </div>
  );
};

export default connect(mapStateToProps)(Withdrawal);
