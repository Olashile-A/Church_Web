import React, {useState, useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from 'next/router';
import { endpoint } from '../../../../endpoint';
import { config } from '../../../../config';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    border: 0

  },
  badgeText: {
    fontSize: 15,
    fontWeight: 'regular',
    color: '#FD0E31',
    opacity: 1,
    borderRadius: 9
  },
  weekContainer: {
    background: 'rgba(253, 14, 49, 0.31)',
    height: 30,
    width: 150,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: theme.spacing(2, 0)
  },
  assigned: {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #E2E2E2',
    // justifyContent: 'space-around',
    height: 40,
    width: '95%',
    display: 'flex',
    alignItems: 'center',
    // marginLeft: 16,
  },
  img:{
    width: 20,
    height: 20,
    borderRadius: '50%',
    marginLeft: 16,
  },
    marginLeft: 16,
  gridContainer:{
    padding: theme.spacing(2, 0)
  },
  pray: {
    border: '1px solid #E2E2E2',
    borderLeft: '4px solid #FD0E31',
    height: 40,
    width: '98%',
    display: 'flex',
    alignItems: 'center',
  },
  status: {
    border: '1px solid #E2E2E2',
    height: 40,
    width: '98%',
    display: 'flex',
    alignItems: 'center',
  },
  date: {
    border: '1px solid #E2E2E2',
    height: 40,
    width: '98%',
    display: 'flex',
    alignItems: 'center',
  },
  note: {
    border: '1px solid #E2E2E2',
    height: 40,
    width: '98%',
    display: 'flex',
    alignItems: 'center',
  },
  timeline: {
    border: '1px solid #E2E2E2',
    height: 40,
    width: '98%',
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: 10
  },
  textTwo: {
    marginLeft: theme.spacing(1)
  }
}));

const docs = {
  facebook: '/static/images/facebook.png',
  youtube: '/static/images/youtube.png',
  instagram: '/static/images/instagram.png'
}

const OngoingTask = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Container className={classes.cardGrid} maxWidth="xl">
        <div className={classes.weekContainer}>
            <Typography className={classes.badgeText}>12th May, 2020</Typography>
        </div>
        <Grid container spacing={1} className={classes.gridContainer}>
          <Grid item xs={12} sm={3} className={classes.grid}>
            <Typography className={classes.text}>Description </Typography>
            <div className={classes.pray}>
            <Typography className={classes.textTwo}> Opening Prayer </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography className={classes.text}> Status </Typography>
            <div className={classes.status}>
             <Typography className={classes.textTwo}> Opening Prayer </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={2} >
            <Typography className={classes.text}> Due Date </Typography>
            <div className={classes.date}>
             <Typography className={classes.textTwo}> Opening Prayer </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography className={classes.text}> Assigned </Typography>
            <div className={classes.assigned}>
              <img src={docs.facebook} className={classes.img}/>
              <Typography className={classes.textTwo}> #Joshua </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Typography className={classes.text}> Note </Typography>
            <div className={classes.note}>
             <Typography className={classes.textTwo}> Opening </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography className={classes.text}> Timeline </Typography>
            <div className={classes.timeline}>
             <Typography className={classes.textTwo}> Opening Prayer </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default OngoingTask;


     