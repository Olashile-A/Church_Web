import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PaymentIcon from '@material-ui/icons/Payment';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CallMadeIcon from '@material-ui/icons/CallMade';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    // width: 467,
    height: 100,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #E2E2E2',
    borderRadius: 5,
    opacity: 1
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  headerTitle: {
    color: '#616781',
    opacity: 1,
    fontSize: 17,
    fontWeight: '500'
  },
  title: {
    letterSpacing: 0.53,
    color: '#616781',
    opacity: 1,
    fontSize: 15,
  },
  weekTitle: {
    letterSpacing: 0.53,
    color: '#616781',
    opacity: 1,
    fontSize: 15,
    marginRight: theme.spacing(3)
  },
  text: {
    letterSpacing: 0.25,
    color: '#616781',
    opacity: 1,
    fontSize: 12,
  },
  number: {
    color: '#101424',
    opacity: 1,
    fontSize: 17,
    fontWeight: 'bold',
    padding: theme.spacing(1,0),
    width: '80%'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(3, 3, 1, 3 ),
    borderBottom: '1px solid grey'
  },
  subHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: theme.spacing(1, 0)
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(1,8),
    marginTop: 5
    // justifyContent: 'center',
  },
  icon: {
    color: '#FD0E31',
    marginTop: 10,
    width: 32,
    height: 32,
  },
  footerIconOne: {
    color: '#FD0E31',
    marginLeft: 10,
  },
  footerIconTwo: {
    color: '#FE98A7',
    marginLeft: 10,
  },
  footerIconThree: {
    color: '#FFE3E7',
    marginLeft: 10,
  },
  nairaIcon: {
    color: '#FD0E31',
    marginTop: 10,
    width: 20,
    height: 40,
  },
  textContainer: {
      marginLeft: theme.spacing(3)
  },
  textContainer2: {
    marginLeft: theme.spacing(2)
  },
  textAndIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: theme.spacing(2, 0)
  }
}));

export default function Donations(props) {
  const classes = useStyles();
  const {className, totalTx, amount, currency } = props
  console.log('donations', props);
  

  return (
    <Paper className={classes.root}>
      <div className={classes.bodyContainer}>
        <div className={classes.body}>
          <PaymentIcon className={classes.icon}/>
          <div className={classes.textContainer}>
            <Typography className={classes.text}> TRANSACTIONS </Typography>
            <Typography className={classes.number}> {totalTx} </Typography>
          </div>
        </div>
        

        <div className={classes.body}>
          <Icon className={classes.nairaIcon}>{currency}</Icon>
          <div className={classes.textContainer2}>
            <Typography className={classes.text}> AMOUNT </Typography>
            <Typography className={classes.number}> 
             {amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}  
            </Typography>
          </div>
        </div>
      </div>
    </Paper>
  );
}


 