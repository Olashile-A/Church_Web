import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from "@material-ui/lab/Alert";
import Warning from "@material-ui/icons/Warning";
import { connect } from 'react-redux';
import { setLinkRoute,setLinkDetails } from "../../../../store/actions"
import axios from 'axios'
import {endpoint} from '../../../../../endpoint'
import {config} from '../../../../../config'

const mapDispatchToProps ={
  setLinkRoute,
  setLinkDetails
};

const mapStateToProps = state => ({
  link: state.link
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
    height: 450,
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
  const { link } = props;
  const [value, setValue] = React.useState({
    accountNumber: link.detail.accountNumber,
    bankCode: link.detail.bankCode,
    bankName: link.detail.bankName,
    type: link.detail.type,
  })

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
    const {link, setLinkDetails, setLinkRoute} = props;
    let token = sessionStorage.getItem('token')
      
    if (token) {
      try {
        const request = {
          accountNumber: value.accountNumber,
          bankCode: value.bankCode,
          bankName: value.bankName,
          type: value.type,
        }
        console.log('request', request);
        
        let headers = {
          'publicToken' : config.publicToken,
          'x-auth-token': token
        }
        let links = await axios.post(endpoint.linkBank,
          request, 
          {"headers" : headers}
        )
        console.log('link', links);
        setLinkDetails(links.data.bankId)
        setLinkRoute("verification");
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

  console.log('value', value);
  
  const handleGoBack = () => {
    const {setLinkRoute} = props;
    setLinkRoute('details')
  }
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
                <Typography gutterBottom className={classes.textOne}> Account Type</Typography>
                <Typography gutterBottom className={classes.textTwo}> {link.detail.type}</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}>Bank Name</Typography>
                <Typography gutterBottom className={classes.textTwo}>{link.detail.bankName}</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Bank Code</Typography>
                <Typography gutterBottom className={classes.textTwo}>{link.detail.bankCode}</Typography>
              </Grid>
              <Divider />
              {/* <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Account Name</Typography>
                <Typography gutterBottom className={classes.textTwo}>{link.detail.type}</Typography>
              </Grid>
              <Divider /> */}
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Account Number</Typography>
                <Typography gutterBottom className={classes.textTwo}>{link.detail.accountNumber}</Typography>
              </Grid>
              <Divider />
            </Grid>
            </CardContent>
            {alert.err === "others" && <Alert severity="warning">{alert.msg}</Alert>}
            <div className={classes.buttonContainer}>
              <Button onClick={handleGoBack} className={classes.buttonOne}>
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
