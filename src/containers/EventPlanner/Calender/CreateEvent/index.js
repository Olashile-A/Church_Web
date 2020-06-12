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
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 0, 2, 4 ),
  },
  text: {
    textAlign: 'left',
    font: 14,
    fontWeight: 'bold',
    color: '#101424',
    paddingLeft: theme.spacing(3)
  },
  textField: {
    width: '100%',
    height: 30,
    margin: 6
  },
  textFieldM: {
    width: '100%',
    margin: '6px 6px 0px'
  },
  textFields: {
    width: '100%',
    height: 30,
    margin: '0px 6px 6px'
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
    color: '#E2E2E2'
    // marginLeft: theme.spacing(3)
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'black',
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: 'pink',
    },
  },
  cssFocused: {
    borderColor: '#FD0E31'
  },
  notchedOutline: {
    borderColor: '#8D8D8D'
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
  const {open, setOpen, handleClose} = props;

//   const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = React.useState({
    title: '',
    category: '',
    address: '',
    description: '',
    uploadFIle: '',
    upload: '',
    fileName: '',
    fromDate: '',
    toDate: '',
    publishDate: '',
  });
  const [alert, setAlert] = React.useState({
    err: "",
    msg: "",
    isLoading: false
  });
  const [loading, setLoading] = React.useState(false);

  const docs = { img: "/static/images/dove.png" };


  const handleChange = name => e => {
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  const handleImage = async event => {
    let file = event.target.files[0];
    if (typeof file !== "undefined") {
      setValue({
        fileName: event.target.files[0].name,
        uploadFIle: file
      });
    } 
  };

  // const handleClose = () => {
  //   setOpen(!isOpen);
  // };

  const handleCreateEvent = async(event) => {
    event.preventDefault();

    if (value.title === "") {
      setAlert({
        err: "title",
        msg: "title can't be empty",
      });
      return;
    }

    if (value.category === "") {
      setAlert({
        err: "category",
        msg: "category can't be empty",
      });
      return;
    }

    if (value.address === "") {
        setAlert({
          err: "address",
          msg: "address can't be empty",
        });
        return;
    }
    if (value.description === "") {
      setAlert({
        err: "decription",
        msg: "description can't be empty",
      });
      return;
    }
    if (value.uploadFIle === "") {
      setAlert({
        err: "upload",
        msg: "Kindly upload an image",
      });
      return;
    }

    let token = sessionStorage.getItem('token')
      
    if (token) {
      try {
        let title = value.title
        let tag = value.category
        let body = value.description
        let startDate = moment(value.fromDate).format();
        let endDate = moment(value.toDate).format();
        let img = value.uploadFIle

        let formData = new FormData();
        formData.append("title", title)
        formData.append("tag", tag)
        formData.append("body", body)
        formData.append("startDate", startDate)
        formData.append("endDate", endDate)
        formData.append("img", img)
        for (var valuee of formData.values()) {
          console.log(valuee); 
       }

       const options = {
         url: endpoint.createEvent,
         method: "POST",
         headers: { 
          'publicToken' : config.publicToken,
          'x-auth-token': token,
          "Access-Control-Allow-Origin": "*"
         },
         data: formData
       }

        let createEvents = await axios(options)
        console.log('event', createEvents);
        setAlert({
          isLoading: false,
        })
        router.reload()

      }catch(error) {
        console.log('error', error);
        setAlert({
          isLoading: false,
          err: "others",
          msg: error.response.data
        })
        console.log('error', error.response);
      }
    }
  };

  const dates = {
    someDate: new Date().toISOString().substring(0, 10)
  };

  return (
    <div>
      <Dialog
        className={classes.root}
        // fullScreen={fullScreen}
        open={open}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" >
          <div className={classes.header}>
          <Typography className={classes.text}> Create Event</Typography>
          {alert.err === "others" && <Typography className={classes.alert}>{alert.msg}</Typography>}
          <CancelOutlinedIcon onClick={handleClose} className={classes.icon} />
          </div>
        </DialogTitle>
        <Divider />
        <DialogContent className={classes.root2}>
          <DialogContentText>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="Event title"
                    fullWidth
                    variant="outlined"
                    autoComplete="fname"
                    value={value.title}
                    onChange={handleChange('title')}
                    className={classes.textField}
                    error={alert.err === "title"}
                    helperText={alert.err === "title" && alert.msg}
                    InputProps={{
                      className: classes.input,
                    }}
                  />
                </Grid>
                <Grid item  xs={12} >
                  <div id="contained-file" className={classes.imgRoot}>
                    <div className={classes.box}>
                      <Typography className={classes.text}> {value.upload !== "" && (value.fileName)} </Typography>
                    </div>
                    <input
                      className={classes.imageInput}
                      id="contained-button-file"
                      onChange={handleImage}
                      value={value.upload}
                      multiple
                      type="file"
                      accept=".jpeg,.jpg"
                    />
                    <label htmlFor="contained-button-file">
                      <Button
                        variant="contained"
                        component="span"
                        size="small"
                        className={classes.imgButton}
                      >
                        select
                      </Button>
                    </label>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Event Category"
                    select
                    fullWidth
                    variant="outlined"
                    autoComplete="fname"
                    value={value.category}
                    onChange={handleChange('category')}
                    className={classes.textFields}
                    error={alert.err === "category"}
                    helperText={alert.err === "category" && alert.msg}
                    InputProps={{
                      className: classes.input,
                    }}
                  >
                    {count.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                  </TextField>
                </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                    id="address2"
                    name="address2"
                    label="Date(from)" 
                    fullWidth
                    type="date"
                    variant="outlined"
                    onChange={handleChange('fromDate')}
                    defaultValue={dates.someDate}
                    className={classes.textField}
                    InputProps={{
                      className: classes.input,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="Date(to)"
                    type="date"
                    fullWidth
                    onChange={handleChange('toDate')}
                    defaultValue={dates.someDate}
                    className={classes.textField}
                    variant="outlined"
                    InputProps={{
                      className: classes.input,
                    }}
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField 
                    id="state" 
                    name="state" 
                    label="Enter Menu(Address)" 
                    fullWidth 
                    value={value.address}
                    onChange={handleChange('address')}
                    className={classes.textField}
                    variant="outlined"
                    error={alert.err === "address"}
                    helperText={alert.err === "address" && alert.msg}
                    InputProps={{
                      className: classes.input,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Enter Description"
                  fullWidth
                  multiline
                  rows={3}
                  variant="outlined"
                  value={value.description}
                  onChange={handleChange('description')}
                  className={classes.textFieldM}
                  error={alert.err === "description"}
                  helperText={alert.err === "description" && alert.msg}
                />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Published date"
                    fullWidth
                    variant="outlined"
                    className={classes.textFields}
                    type='date'
                    defaultValue={dates.someDate}
                    onChange={handleChange('publishDate')}
                    InputProps={{
                      className: classes.input,
                    }}
                  />
                </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.buttonContainer}>
          <Button disabled={alert.isLoading} className={classes.buttonOne} onClick={handleCreateEvent} autoFocus>
          {alert.isLoading ? <CircularProgress size="small" className={classes.progress}/> : "Create Event"}
          </Button>
          <Button className={classes.buttonTwo} onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
