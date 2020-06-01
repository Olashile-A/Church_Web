import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
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
  text: {
    letterSpacing: 0.53,
    color: '#616781',
    opacity: 1,
    fontSize: 12,
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: theme.spacing(1)
  },
  icon: {
    color: '#FD0E31',
    marginTop: 10,
    width: 35,
    height: 35,
  },
  textContainer: {
      marginLeft: theme.spacing(3)
  },
  textContainer2: {
    marginLeft: theme.spacing(2)
  },
  button: {
    width: 150,
    textAlign: 'center',
    height: 40,
    color: '#FFFFFF',
    borderRadius: 4,
    background: '#FD0E31 0% 0% no-repeat',
    fontSize: 12,
    fontWeight: 'bold'
  }
}));

export default function PaymentTrend(props) {
  const classes = useStyles();
  const {className} = props

  return (
    <Paper className={classes.root}>
      <div className={classes.bodyContainer}>
        <div className={classes.body}>
          <div className={classes.textContainer}>
            <Typography className={classes.text}> PAYMENT TREND </Typography>
            <TrendingUpIcon className={classes.icon} />
          </div>
        </div>
        

        <div className={classes.body}>
          <div className={classes.textContainer2}>
            <Button className={classes.button}> Download Report </Button>
            
          </div>
        </div>
      </div>
    </Paper>
  );
}


 