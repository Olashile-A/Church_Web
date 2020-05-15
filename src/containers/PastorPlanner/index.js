import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography, Button } from '@material-ui/core';
import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Tab from "../../components/Tab/Tab";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  title: {
    letterSpacing: 0.53,
    color: '#616781',
    opacity: 1,
    fontSize: 18,
  },
  weekTitle: {
    letterSpacing: 0.53,
    color: '#616781',
    opacity: 1,
    fontSize: 18,
    marginRight: theme.spacing(3)
  },
  text: {
    letterSpacing: 0.53,
    color: '#616781',
    opacity: 1,
    fontSize: 15,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(3, 3, 1, 3 ),
    borderBottom: '1px solid grey'
  },
  headerTwo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 3, 1, 1 ),
    borderBottom: '1px solid grey',
    background: '#FCFCFC 0% 0% no-repeat padding-box'
  },
  headerTitle: {
    color: '#616781',
    opacity: 1,
    fontSize: 20,
    fontWeight: '500'
  },
  subHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  subHeaderTwo: {
    display: 'flex',
    flexDirection: 'row',
    
  },
  text: {
    padding: 10,
    fontWeight: '500',
    fontSize: 14,
  },
  todayButton: {
    width: 78,
    height: 40,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    borderRadius: 6,
    marginLeft: theme.spacing(5),
    fontSize: 13,
    border: '1px solid #D9D9D9'
  },
  taskButton: {
    width: 100,
    height: 40,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 6,
    marginLeft: theme.spacing(5),
    color: '#FFFFFF',
    fontSize: 13,
    border: '1px solid #D9D9D9'
  },
  dropButton: {
    width: 97,
    height: 40,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    borderRadius: 6,
    marginRight: theme.spacing(5),
    fontSize: 13,
    border: '1px solid #D9D9D9'
  },
  grid: {
    padding: 10
  },
  paper: {
    height: 80
  }
}));



const PastorPlanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper style={{ height: '80vh' }} >
      <div className={classes.header}>
        <Typography className={classes.headerTitle} >
          Pastor Planner
        </Typography>
        <div className={classes.subHeader} >
          <div>   
            <Typography className={classes.weekTitle} color="textSecondary" gutterBottom>
              All Tasks
            </Typography>
          </div>
          <div>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Church Staff
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.headerTwo}>
        <div className={classes.subHeaderTwo}>
          <Typography className={classes.text}> May 2018 </Typography>
          <Button className={classes.todayButton}> Today</Button>
          <Button className={classes.taskButton}> Create Task</Button>
        </div>
        <div className={classes.subHeaderTwo}>
          <Button className={classes.dropButton}> Completed</Button>
          <Button className={classes.dropButton}> Color tags</Button>
          <MoreHorizIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.grid}>
        <Grid container spacing={1} direction='row'>
          <Grid item xs={2}>
            <Typography style={{textAlign: 'center'}}> Mon </Typography>
            <Paper className={classes.paper}>27</Paper>
          </Grid>
          <Grid item xs={2}>
            <Typography style={{textAlign: 'center'}}> Mon </Typography>
            <Paper className={classes.paper}>27</Paper>
          </Grid>
          <Grid item xs={2}>
            <Typography style={{textAlign: 'center'}}> Mon </Typography>
            <Paper className={classes.paper}>27</Paper>
          </Grid>
          <Grid item xs={2}>
            <Typography style={{textAlign: 'center'}}> Mon </Typography>
            <Paper className={classes.paper}>27</Paper>
          </Grid>
          <Grid item xs={2}>
            <Typography style={{textAlign: 'center'}}> Mon </Typography>
            <Paper className={classes.paper}>27</Paper>
          </Grid>
        </Grid>
      </div>
      </Paper>
    </div>
  );
};

export default PastorPlanner;
