import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography, Card } from '@material-ui/core';
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Warning from "@material-ui/icons/Warning";
import { connect } from 'react-redux';
import { setLinkRoute } from "../../../../store/actions"
import OtpInput from 'react-otp-input';
import axios from 'axios'
import {endpoint} from '../../../../../endpoint'
import {config} from '../../../../../config'

const mapDispatchToProps ={
  setLinkRoute
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: theme.spacing(5, 5),
    height: '40%'
  },
  text: {
    textAlign: 'left',
    font: 17,
    fontWeight: 'regular',
    color: '#000000',
  },
  textOne: {
    textAlign: 'left',
    font: 17,
    fontWeight: 'regular',
    color: '#000000',
  },
  textField: {
    width: 63,
    height: 68,
    borderRadius: 7,
  },
  resendButton: {
    textAlign: 'left',
    font: 17,
    fontWeight: 'regular',
    color: '#FD0E31',
    '&:hover' : {
      background: 'none',
      border: 0
    }
  },
  goBackButton: {
    fontSize: 12,
    color: '#FD0E31',
    fontWeight: 'bold',
    '&:hover' : {
      background: 'none',
      border: 0
    }
  },
  VerifyButton: {
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
    // justifyContent: 'space-around',
  },
  sentContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(3, 0)
  },
  resendContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2, 0)
  },
  inputContainer : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

const OtpVerification = (props) => {
  const classes = useStyles();
  const [otp, setOtp] = React.useState("")
  const [msg, setMsg] = React.useState("")

  
 const handleVerify = async () => {
    const { setLinkRoute, link } = props;

    let token = sessionStorage.getItem('token')
      
    if (token) {
      try {
        const request = {
          otpCode: otp
        }
        console.log('request', request);
        
        let headers = {
          'publicToken' : config.publicToken,
          'x-auth-token': token
        }
        let id = link.detail
        let verify = await axios.put(endpoint.bankVerify + '/' + id,
          request, 
          {"headers" : headers}
        )
        console.log('verify', verify);
        setLinkRoute('complete');
      } catch (error) {
        console.log('error', error);
        setMsg(error.response.data)
        console.log('error', error.response);
      }
    }
  }

  const handleOnChange = otp => {
    setOtp(otp)
  }
  console.log(otp);
  return (
    <div className={classes.root}>
      <div>

      </div>
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <Typography className={classes.headerText}> Verify </Typography>
          <CardContent className={classes.cardContent}>
            <div className={classes.sentContainer}>
              <Typography className={classes.text}>Please Enter the code sent to</Typography>
              <Typography className={classes.text}> +235 811 385 2536</Typography>
            </div>
            <div className={classes.inputContainer}>
                <OtpInput
                  onChange={handleOnChange}
                  value={otp}
                  numInputs={4}
                  inputStyle={{width: 63, height: 68, fontSize: 20}}
                  containerStyle={classes.input}
                  separator={<span> - </span>}
                  isInputNum={true}
                />
              </div>
            <div className={classes.resendContainer}>
              <Typography className={classes.textOne}>Didn't get code?</Typography>
              <Button className={classes.resendButton}>Click to resend</Button>
            </div>
            <Typography className={classes.resendButton}>{msg}</Typography>
          </CardContent>
          <div className={classes.buttonContainer}>
            <Button className={classes.goBackButton}  autoFocus>
              Go back
            </Button>
            <Button className={classes.VerifyButton} onClick={handleVerify} color="primary" autoFocus>
              Verify
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(OtpVerification);
