import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BarChart from '../../../../components/Chart/Chart.js';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 284,
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
    fontSize: 15,
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

export default function MonthlyProgress(props) {
  const classes = useStyles();
  const {className} = props


  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.headerText} color="textSecondary" gutterBottom>
          Monthly Progress
        </Typography>
        <div className={classes.textAndIconContainer}>
          <FiberManualRecordIcon className={classes.footerIconOne}/>
          <Typography className={classes.text}> Tithe </Typography>
          <FiberManualRecordIcon className={classes.footerIconTwo}/>
          <Typography className={classes.text}> Offering </Typography>
          <FiberManualRecordIcon className={classes.footerIconThree}/>
          <Typography className={classes.text}> Others </Typography>
        </div>
      </div>
      <BarChart />
    </Paper>
  );
}
