import React from 'react';
import {fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography, Divider, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from 'axios';
import { endpoint } from '../../../../../endpoint';
import { config } from '../../../../../config';
import moment from 'moment';
import { useRouter } from 'next/router';

const count = [
  {
    value: 'prayer request',
    label: 'prayer request',
  },
];

const useStyles = makeStyles(theme => ({ 
  root: {
    height: 650,
  },
  root2: {
    height: 650,
    width: 500
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTwo: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1, 0, 2, 4 ),
  },
  text: {
    textAlign: 'left',
    font: 14,
    fontWeight: 'bold',
    color: '#101424',
    paddingLeft: theme.spacing(3)
  },
  date: {
    textAlign: 'left',
    font: 14,
    fontWeight: 'bold',
    color: '#E2E2E2',
    marginLeft: theme.spacing(1)
  },
  buttonOne: {
    width: 127,
    height: 36,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 4,
    fontSize: 12,
    color: '#FFFFFF'
  },
  buttonTwo: {
    width: 127,
    height: 36,
    fontSize: 12,
    color: '#FD0E31',
    fontWeight: 'bold',
    '&:hover' : {
      background: 'none',
      border: 0
    }
  },
  icon: {
    width:  20,
    height: 20,
    color: '#E2E2E2',
    cursor: 'pointer'
    // marginLeft: theme.spacing(3)
  },
  input: {
    height: 46
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: theme.spacing(1)   
  },
  imageInput: {
    display: "none"
  },
  imgRoot: {
    display: 'flex',
    border: "1px solid #CCCCCC",
    borderRadius: 5,
    justifyContent: 'space-between',
    width: '100%',
    height: 46,
    margin: '6px 6px 0px 6px'
  },
  imgButton: {
    width: 100,
    height: 44,
    background: '#FDFDFD 0% 0% no-repeat padding-box',
    borderRadius: '0px 4px 4px 0px',
    boxShadow: 'none',
    borderLeft: '1px solid #CCCCCC'
  },
  alert: {
    color: 'orange'
  }
}));

export default function ResponsiveDialog(props) {
  const classes = useStyles();
  const router = useRouter()
  const {open, viewDetails, handleClose} = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const docs = { img: "/static/images/dove.png" };


  return (
    <div>
      {viewDetails.map((event => 
      <Dialog
        className={classes.root}
        // fullScreen={fullScreen}
        open={open}
        key={event.id}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
            <DialogTitle id="responsive-dialog-title" >
            <div className={classes.header}>
            <div className={classes.headerTwo}>
                <Typography className={classes.text}> {event.tagString} </Typography>
                <Typography className={classes.date}>{moment(event.startDate).format("DD MMM yyyy")}</Typography>
            </div>
            <CancelOutlinedIcon onClick={handleClose} className={classes.icon} />
            </div>
            </DialogTitle>
            <Divider />
            <DialogContent className={classes.root2}>
            <DialogContentText>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <div>
                        <img src={event.imgx45} />
                    </div>
                    </Grid>
                    <Grid item  xs={12} >
                    <div id="contained-file" >
                        <Typography>{event.body}</Typography>
                    </div>
                    </Grid>
                </Grid>
            </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.buttonContainer}>
            <Button className={classes.buttonTwo} onClick={handleClose} color="primary" autoFocus>
                Close
            </Button>
            </DialogActions>
      </Dialog>
      ))}
    </div>
  );
}
