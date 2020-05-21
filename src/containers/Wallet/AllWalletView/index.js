import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Card, CardContent, Divider } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Warning from "@material-ui/icons/Warning";
import Donations from './components/Donations'
import PaymentTrend from './components/PaymentTrend'
import PaymentActivity from './components/PaymentActivity'
import Transactions from './components/Transactions'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3),
  },
  container: {
    display: 'flex',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  headerTitle: {
    color: '#101424',
    opacity: 1,
    fontSize: 17,
    fontWeight: 'bold',
    padding: theme.spacing(0, 0, 2 , 2),
  },
  buttonOne: {
  },
  buttontwo: {
  },
  buttonThree: {
  },
  buttonFour: {
  },

}));

const AllWalletView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
            <Typography className={classes.headerTitle} >
             Wallet
            </Typography>
            <div className={classes.container}>
                <Paper>
                    <div className={classes.buttonContainer}>
                        <Button className={classes.buttonOne}> Tithe</Button>
                        <Divider />
                        <Button className={classes.buttonTwo}> Seed</Button>
                        <Divider />
                        <Button className={classes.buttonThree}> Offering</Button>
                        <Divider />
                        <Button className={classes.buttonFour}> Others</Button>
                        <Divider />
                    </div>
                </Paper>
                <Container maxWidth="md">
                    <Grid container spacing={1}  direction='row'>
                        <Grid item sm={6} xs={12} >
                            <Donations />
                        </Grid>
                        <Grid item sm={6} xs={12} >
                            <PaymentTrend />
                        </Grid>
                        <Grid item xs={12} >
                            <PaymentActivity />
                        </Grid>
                        <Grid item xs={12} >
                            <Transactions />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Paper>
    </div>
  );
};

export default AllWalletView;
