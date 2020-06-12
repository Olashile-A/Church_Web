import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BarChart from './BarChart';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 340,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #E2E2E2',
    borderRadius: 5,
    opacity: 1
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 3, 1, 3 ),
    borderBottom: '1px solid grey'
  },
  headerText: {
    color: '#616781',
    opacity: 1,
    fontSize: 17,
    fontWeight: '500'
  },
  text: {
    letterSpacing: 0.53,
    color: '#616781',
    opacity: 1,
    fontSize: 12,
  },
  footerIconOne: {
    color: '#FD0E31',
    width: 10,
    height: 10,
    margin: 5
  },
  footerIconTwo: {
    color: '#FE98A7',
    width: 10,
    height: 10,
    margin: 5
  },
  footerIconThree: {
    color: '#FFE3E7',
    width: 10,
    height: 10,
    margin: 5
  },
  textAndIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
}));

export default function PaymentActivity(props) {
  const classes = useStyles();
  const {className, name} = props

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.headerText} color="textSecondary" gutterBottom>
          {name + ' '}Payment Activity
        </Typography>
      </div>
      <BarChart />
    </Paper>
  );
}
