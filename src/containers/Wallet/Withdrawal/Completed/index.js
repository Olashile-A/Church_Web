import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography, Card, CardContent } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Warning from "@material-ui/icons/Warning";
import { connect } from 'react-redux';
import { setWithrawRoute } from "../../../../store/actions"


const mapDispatchToProps ={
  setWithrawRoute
};

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(2)
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#101424',
    padding: theme.spacing(1, 0),
  },
  card: {
    width: 398,
    height: 532,
    border: '1px solid #E2E2E2',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(4)
  },
  text: {
    textAlign: 'left',
    font: 16,
    fontWeight: 'regular',
    color: '#000000',
    width: 300,
    height: 74
  },
  img: {
    background: 'transparent'
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 78,
    height: 78,
    border: '2px solid #83C03F',
    borderRadius: '50%',
    marginTop: theme.spacing(5)
  },
  VerifyButton: {
    width: 124,
    height: 40,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 4,
    fontSize: 15,
    color: '#FFFFFF',
    margin: theme.spacing(4,0)
  },
  goToWallet: {
    borderRadius: 4,
    fontSize: 15,
    color: '#FD0E31',
    margin: theme.spacing(1,0),
    '&:hover' : {
      background: 'transparent',
      border: 'none'
    }
  },
  sentContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    // padding: theme.spacing(4)
  },
}));

const docs = {
  success: '/static/images/check.png' 
}

const Completed = (props) => {
  const classes = useStyles();

  const handleGoToWallet = () => {
    const {setWithrawRoute } = props;
    setWithrawRoute('account')
  }

  return (
    <div className={classes.root}>
      <div>

      </div>
      <Container maxWidth="sm">
        <Typography className={classes.headerText}>Withdraw Fund</Typography>
        <Card className={classes.card}>
          <div className={classes.imageContainer}>
            <img src={docs.success} className={classes.img} />
          </div>
          <CardContent className={classes.sentContainer}>
            <Typography gutterBottom className={classes.headerText}>Withdrawal was Successful</Typography>
            <Typography className={classes.textTwo}>
              Withdrawal was Successful, 
              you can now easily make transfers now to your account
            </Typography>
            <Button className={classes.VerifyButton} onClick={handleGoToWallet} color="primary" autoFocus>
              Go to Wallet
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Completed);

