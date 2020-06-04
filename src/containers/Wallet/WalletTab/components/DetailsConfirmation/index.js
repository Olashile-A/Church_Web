import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Warning from "@material-ui/icons/Warning";
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from "@material-ui/lab/Alert";
import { connect } from 'react-redux';
import { setWallet } from "../../../../../store/actions"
import axios from 'axios'
import {endpoint} from '../../../../../../endpoint'
import {config} from '../../../../../../config'

const mapDispatchToProps ={
  setWallet
};

const mapStateToProps = state => ({
  wallet : state.wallet
})
const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(2)
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#101424',
    padding: theme.spacing(2),
    borderBottom: '1px solid #E2E2E2',
  },
  card: {
    width: 398,
    height: 500,
    border: '1px solid #E2E2E2',
    borderRadius: 5,
  },
  cardContent: {
    padding: theme.spacing(5, 6),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(5, 5),
  },
  textOne: {
    textAlign: 'left',
    font: 17,
    fontWeight: 'regular',
    color: '#9B9B9B',
    width: 175, 
    height: 36,
  },
  textTwo: {
    textAlign: 'left',
    font: 17,
    fontWeight: 'regular',
    color: '#101424',
    width: 175, 
    height: 36,
  },
  buttonOne: {
    fontSize: 12,
    color: '#FD0E31',
    fontWeight: 'bold',
    '&:hover' : {
      background: 'none',
      border: 0
    }
  },
  buttonTwo: {
    width: 108,
    height: 40,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 4,
    fontSize: 15,
    color: '#FFFFFF'
  },
  grid : {
    display: 'flex',
    flexDirection: 'row',
  },
  progress: {
    background: 'transparent',
    color: '#FFFFFF'
  },
}));

const DetailsConfirmation = (props) => {
  const classes = useStyles();
  const {handleConfirmGoBack, wallet} = props

  const [alert, setAlert] = React.useState({
    err: "",
    msg: "",
    others: "",
    isLoading: false
  });

  const handleConfirm = async () => {

    setAlert({
      err: "",
      msg: "",
      others: "",
      isLoading: true
    })
    const {setWallet, wallet, handleConfirmContinue} = props;
    let token = sessionStorage.getItem('token')
      
    if (token) {
      try {
        const request = {
          name: wallet.walletDetail.name,
          country: wallet.walletDetail.country,
          currency: wallet.walletDetail.currency,
        }
        console.log('request', request);
        
        let headers = {
          'publicToken' : config.publicToken,
          'x-auth-token': token
        }
        let create = await axios.post(endpoint.wallet,
          request, 
          {"headers" : headers}
        )
        console.log('create', create);
        setWallet(create.data.walletId)
        handleConfirmContinue()
      } catch (error) {
        console.log('error', error);
        setAlert({
          err: "others",
          msg: error.response.data,
          isLoading: false
        })
        console.log('error', error.response);
      }
    }
  };
 
  return (
    <div className={classes.root}>
        <div>

        </div>
        <Container maxWidth="sm">
          <Card className={classes.card}>
            <Typography className={classes.headerText}> Confirm Details </Typography>
            <CardContent className={classes.cardContent}>
            <Grid container spacing={1}  direction='column'  justify="center" align="center">
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Wallet Currency</Typography>
                <Typography gutterBottom className={classes.textTwo}> {wallet.walletDetail.currencyName}(₦)</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}>Wallet Name</Typography>
                <Typography gutterBottom className={classes.textTwo}>{wallet.walletDetail.name}</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Church Code ID</Typography>
                <Typography gutterBottom className={classes.textTwo}>{wallet.walletDetail.number}</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Church Country</Typography>
                <Typography gutterBottom className={classes.textTwo}>{wallet.walletDetail.countryName}</Typography>
              </Grid>
              <Divider />
            </Grid>
            </CardContent>
            {alert.err === "others" && <Alert severity="warning">{alert.msg}</Alert>}
            <div className={classes.buttonContainer}>
              <Button onClick={handleConfirmGoBack} className={classes.buttonOne}>
                Go back
              </Button>
              <Button className={classes.buttonTwo}
                disabled={alert.isLoading}
               onClick={handleConfirm} color="primary" >
              {alert.isLoading ? <CircularProgress className={classes.progress}/> : 'Confirm'} 

              </Button>
            </div>
          </Card>
        </Container>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsConfirmation);
