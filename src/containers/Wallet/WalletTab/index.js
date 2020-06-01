import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container } from '@material-ui/core';
import {
  CreateWallet,
  MonthlyProgress,
  Donations,
  RecentDonation
} from '../components';
import WalletDetails from './components/WalletDeTails';
import  DetailsConfirmation  from './components/DetailsConfirmation';
import OtpVerification from './components/OtpVerification';
import  Completed  from './components/Completed';
import Flow from "../../../components/Flow"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios';
import { endpoint } from '../../../../endpoint';
import { config } from '../../../../config';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  grid: {
    padding: theme.spacing(1, 2)
  }
}));

const WalletTab = () => {
  const classes = useStyles();
  const [country, setCountry] = React.useState([])
  const [currency, setCurrency] = React.useState([])

  useEffect(() => {
    const fetchData = async () => {
      let token = sessionStorage.getItem('token')
      
      if (token) {
        try {
          let headers = {
            'publicToken' : config.publicToken,
            'x-auth-token': token
          }
          let countries = await axios.get(endpoint.getCountries, 
            {"headers" : headers}
          )
          let currencies = await axios.get(endpoint.getCurrencies, 
            {"headers" : headers}
          )
          console.log('countries', countries);
          setCountry(countries.data)

          console.log('currencies', currencies);
          setCurrency(currencies.data)
        }catch(error) {
          console.log('error', error);
          console.log('error', error.response);
        }
      }
    }

    fetchData();
  }, [])

  const validateForm = () => {
    child.handleValidate()
  }

  const [view, setView] = React.useState({
    main: true,
    wallet: false,
    confirm: false,
    otp: false,
    complete: false,
  })

  const handleGetStarted = () => {
    setView({
      main: false,
      wallet: true,
      confirm: false,
      otp: false,
      complete: false,
    })
  }

  const handleWalletDetailsContinue = () => {
    validateForm();
    setView({
      main: false,
      wallet: false,
      confirm: true,
      otp: false,
      complete: false,
    })
  }

  const handleConfirmContinue = () => {
    setView({
      main: false,
      wallet: false,
      confirm: false,
      otp: true,
      complete: false,
    })
  }

  const handleOtpContinue = () => {
    setView({
      main: false,
      wallet: false,
      confirm: false,
      otp: false,
      complete: true,
    })
  }


  return (
    <div className={classes.root}>
      {view.main && 
        <Grid container spacing={1}  direction='row'>
        <Grid item sm={6} xs={12} >
          <Donations />
        </Grid>
        <Grid item sm={6} xs={12} >
          <CreateWallet 
            handleGetStarted={handleGetStarted}
          />
        </Grid>
        <Grid item sm={8} xs={12} >
          <MonthlyProgress />
        </Grid>
        <Grid item sm={4} xs={12} >
          <RecentDonation />
        </Grid>
      </Grid>
      }
      {!view.main && 
        <Grid container justify="flex-start" align="flex-start" className={classes.grid}>
          <Grid item xs={12} sm={4}>
            <Flow />
          </Grid>
          <Grid item xs={12} sm={8} >
            {
              view.wallet && (
                <WalletDetails 
                  onRef={ref => (child = ref)}
                  country={country}
                  currency={currency}
                  handleWalletDetailsContinue={handleWalletDetailsContinue}
                />
              )
            }
            {
              view.confirm && (
              <DetailsConfirmation 
                handleConfirmContinue={handleConfirmContinue}
              />
            )}
            {
              view.otp && (
              <OtpVerification 
                handleOtpContinue={handleOtpContinue}
              />
            )}
            {
              view.complete && (
              <Completed />
            )}
          </Grid>>
        </Grid>
      }
      
    </div>
  );
};

export default WalletTab;
