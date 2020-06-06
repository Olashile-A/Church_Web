import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
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
    paddingBottom: theme.spacing(2),
  },
  headerTextOne: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#101424',
    paddingBottom: theme.spacing(1),
  },
  headerTextTwo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#101424',
    padding: theme.spacing(2),
    borderBottom: '1px solid #E2E2E2',
  },
  card: {
    width: 398,
    height: 410,
    border: '1px solid #E2E2E2',
    borderRadius: 5,
  },
  cardContent: {
    padding: theme.spacing(5, 3),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0,2)
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
  button: {
    marginTop: theme.spacing(4,5),
    width: 366,
    height: 35,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 4,
    fontWeight: 'bold',
    fontSize: '15',
    color: '#FFFFFF',
    '&:hover': {
      background: '#FD0E31 0% 0% no-repeat padding-box',
      color: '#EEEEE'
    }
  },
  grid : {
    display: 'flex',
    flexDirection: 'row',
  }
}));

const DetailsConfirmation = (props) => {
  const classes = useStyles();

  const handleProceed = () => {
    const { setWithrawRoute } = props;
    setWithrawRoute("withdrawVerification");
  };

  return (
    <div className={classes.root}>
      <div>

      </div>
      <Container maxWidth="sm">
        <Typography className={classes.headerTextOne}>Withdraw Fund</Typography>
        <Card className={classes.card}>
          <Typography className={classes.headerTextTwo}> Details Confirmation </Typography>
          <CardContent className={classes.cardContent}>
            <Grid container spacing={1}  direction='column' justify="center" align="center">
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Transfer From</Typography>
                <Typography gutterBottom className={classes.textTwo}>Exalt Payer Center Lekki</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}>Transfer to Bank</Typography>
                <Typography gutterBottom className={classes.textTwo}>Providus</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Bank Account</Typography>
                <Typography gutterBottom className={classes.textTwo}>Clam prayer 4000270900</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}>Amount</Typography>
                <Typography gutterBottom className={classes.textTwo}>N50,000</Typography>
              </Grid>
              <Divider />
            </Grid>
          </CardContent>
          <div className={classes.buttonContainer}>
            <Button className={classes.button} onClick={handleProceed}  color="primary" autoFocus>
              Proceed
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(DetailsConfirmation);
