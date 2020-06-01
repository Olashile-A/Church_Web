import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Warning from "@material-ui/icons/Warning";
import { connect } from 'react-redux';
// import { setWalletRoute } from "../../../../../store/actions"

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
    height: 532,
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
  }
}));

const DetailsConfirmation = (props) => {
  const classes = useStyles();
  const {handleConfirmContinue} = props

 
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
                <Typography gutterBottom className={classes.textTwo}> Savings</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}>Bank Name</Typography>
                <Typography gutterBottom className={classes.textTwo}>Wema Bank</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Bank Code</Typography>
                <Typography gutterBottom className={classes.textTwo}>Default</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Account Name</Typography>
                <Typography gutterBottom className={classes.textTwo}>Randy Olashile</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Account Number</Typography>
                <Typography gutterBottom className={classes.textTwo}>0241217564</Typography>
              </Grid>
              <Divider />
            </Grid>
            </CardContent>
            <div className={classes.buttonContainer}>
              <Button className={classes.buttonOne}>
                Go back
              </Button>
              <Button className={classes.buttonTwo} onClick={handleConfirmContinue} color="primary" >
                Confirm
              </Button>
            </div>
          </Card>
        </Container>
    </div>
  );
};

export default DetailsConfirmation;
