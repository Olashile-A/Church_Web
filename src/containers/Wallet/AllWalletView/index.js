import React, {useEffect} from 'react';
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
import axios from 'axios';
import { endpoint } from '../../../../endpoint';
import { config } from '../../../../config';

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
  const [wallet, setWallet] = React.useState([])

  useEffect(() => {
    const fetchData = async () => {
      let token = sessionStorage.getItem('token')
      
      if (token) {
        try {
          let headers = {
            'publicToken' : config.publicToken,
            'x-auth-token': token
          }
          let wallets = await axios.get(endpoint.wallet, 
            {"headers" : headers}
          )
          console.log('wallets', wallets);
          setWallet(wallets.data)
        } catch (error) {
          console.log('error', error);
          console.log('error', error.response);
        }
      }
    }

    fetchData();
  }, [])

  const handleGoBack = () => {
    router.push('/dashboard/wallet')
  }

  const handleWalletSwitch = () => {
    let data=[]
    wallet.map(detail => {
      data.push({ value: detail.name})
    })

    for (var i = 0; i < data.length; i++){
     console.log('data', data[i]);
    }

    // if(data.[0] === 'offer' )
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
            wallet={wallet}
            handleWalletSwitch={handleWalletSwitch}
          />
          <Container maxWidth="md">
            {wallet.map((detail) => (
              <Grid container spacing={1} key={detail._id}  direction='row'>
                <Grid item sm={6} xs={12} >
                  <Donations 
                    total={detail.totalTx}
                    amount={detail.amount}
                    currency={detail.currency}
                    name={detail.name}
                  />
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
            ))}
           
          </Container>
        </div>
      </Paper>
    </div>
  );
};

export default AllWalletView;
