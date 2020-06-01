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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Wallets from './components/wallets';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 7),
  },
  paper: {
    // padding: theme.spacing(3),
  },
  container: {
    display: 'flex',
    padding: theme.spacing(1,3),
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 150,
    height: 160,
    border: '1px solid #D8D8D8',
    borderRadius: 8,
  },
  headerTitle: {
    color: '#101424',
    opacity: 1,
    fontSize: 17,
    fontWeight: 'bold',
    padding: theme.spacing(2, 0, 2 , 3),
    borderBottom: '1px solid #E2E2E2'
  },
  backButton:{
    background: 'none 0% 0% no-repeat padding-box',
    borderRadius: 4,
    width:  80,
    height: 36,
    fontSize: 14,
    color: '#101424',
    marginLeft: theme.spacing(2)
  }

}));
const titles = [
  {
    val: 0,
    title: "TITHE",
  },
  {
    val: 1,
    title: "SEED",

  },
  {
    val: 2,
    title: "OFFERING",

  },
  {
    val: 3,
    title: "OTHERS",

  },
]

const AllWalletView = (props) => {
  const classes = useStyles();
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/dashboard/wallet')
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography className={classes.headerTitle} >
          Wallet
        </Typography>
        <Button className={classes.backButton} onClick={handleGoBack} startIcon={<ArrowBackIcon />}>
          Back
        </Button>
        <div className={classes.container}>
          <Wallets 
            titles={titles}
          />
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
