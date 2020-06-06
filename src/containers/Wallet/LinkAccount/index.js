import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import AccountCardDetails from './AccountCardDetails';
import  DetailsConfirmation  from './DetailsConfirmation';
import OtpVerification from './OtpVerification';
import  Completed  from './Completed';
import Flow from "../../../components/Flow"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



const mapStateToProps = state => ({
  link: state.link
});

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(2)
  },
  grid: {
    padding: theme.spacing(1, 2)
  }
}));

const LinkAccount = (props) => {
  const classes = useStyles();
  const { link } = props
  return (
    <div className={classes.root}>
       <Button className={classes.backButton} startIcon={<ArrowBackIcon />}>
          Back
      </Button>
      <Grid container justify="flex-start" align="flex-start" className={classes.grid}>
        <Grid item xs={12} sm={4}>
          <Flow />
        </Grid>
        <Grid item xs={12} sm={8} >
          {
            link.route === "details" && (
              <AccountCardDetails />
            )
          }
          {
            link.route === "confirmation" && (
            <DetailsConfirmation />
          )}
          {
            link.route === "verification" && (
            <OtpVerification />
          )}
          {
            link.route === "complete" && (
            <Completed />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(mapStateToProps)(LinkAccount);
