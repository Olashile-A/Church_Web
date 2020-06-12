import React from 'react';
import {fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography, Divider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from "@material-ui/lab/Alert";
import isEmail from "validator/lib/isEmail";
import { useRouter } from 'next/router';
import axios from 'axios';
import {endpoint} from '../../../../../endpoint';
import {config} from '../../../../../config';

const useStyles = makeStyles(theme => ({ 
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(1)
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textField: {
    width: 366,
    height: 40,
    marginBottom: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 1, 3, 3 ),
  },
  text: {
    textAlign: 'left',
    font: 14,
    fontWeight: 'bold',
    color: '#101424',
    paddingLeft: theme.spacing(3)
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
  }
}));

export default function ResponsiveDialog(props) {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const {isOpen, setIsopen, handleClose} = props;

  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    title: "",
  });
  const [alert, setAlert] = React.useState({
    err: "",
    msg: "",
  });
  const [loading, setLoading] = React.useState(false);

  const docs = { img: "/static/images/dove.png" };


  const handleChange = name => e => {
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  // const handleClose = () => {
  //   setOpen(!isOpen);
  // };

  const handleCreateStaff = async (event) => {
    event.preventDefault();
    let token = sessionStorage.getItem('token')

    setAlert({
      err: "",
      msg: "",
      isLoading: true
    })

    if (value.firstName === "") {
      setAlert({
        err: "firstName",
        msg: "firstName can't be empty",
      });
      return;
    }

    if (value.lastName === "") {
      setAlert({
        err: "lastName",
        msg: "lastName can't be empty",
      });
      return;
    }

    if (!isEmail(value.email)) {
      setAlert({
        err: "email",
        msg: "invalid email",
      });
      return;
    }

    if (value.title === "") {
      setAlert({
        err: "title",
        msg: "title can't be empty",
      });
      return;
    }

    if (token) {
      try {
        const request = {
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          title: value.title,
        }
        let headers = {
          'publicToken' : config.publicToken,
          'x-auth-token': token
        }
        let addStaff = await axios.post(endpoint.createStaff,
          request, 
          {"headers" : headers}
        )
        console.log('addStaff', addStaff);
        
        router.reload()

        setAlert({
          isLoading: false
        })
      } catch (error) {
        console.log('error', error);
        console.log('error', error.response);
        setAlert({
          err: "others",
          msg: error.response,
          isLoading: false
        })
      }
    }
  };

  return (
    <div>
      <Dialog
        className={classes.root}
        fullScreen={fullScreen}
        open={isOpen}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" >
          <div className={classes.header}>
          <Typography className={classes.text}> Add Staff</Typography>
          <CancelOutlinedIcon className={classes.icon} onClick={handleClose}/>
          </div>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            <form className={classes.form} onSubmit={handleCreateStaff} noValidate>
              {alert.err === "others" && <Alert severity="warning">{alert.msg}</Alert>}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={value.firstName}
                className={classes.textField}
                onChange={handleChange("firstName")}
                id="firstName"
                label="First Name"
                name="firstName"
                autoFocus
                error={alert.err === "firstName"}
                helperText={alert.err === "firstName" && alert.msg}
                InputProps={{
                    classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                    },
                }}
                InputLabelProps={{
                    classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                    },
                }} 
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={value.lastName}
                className={classes.textField}
                onChange={handleChange("lastName")}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoFocus
                error={alert.err === "lastName"}
                helperText={alert.err === "lastName" && alert.msg}
                InputProps={{
                    classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                    },
                }}
                InputLabelProps={{
                    classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                    },
                }} 
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={value.email}
                className={classes.textField}
                onChange={handleChange("email")}
                id="email"
                label="email"
                name="email"
                autoFocus
                error={alert.err === "email"}
                helperText={alert.err === "email" && alert.msg}
                InputProps={{
                    classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                    },
                }}
                InputLabelProps={{
                    classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                    },
                }} 
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={value.title}
                className={classes.textField}
                onChange={handleChange("title")}
                id="title"
                label="Title"
                name="title"
                autoFocus
                error={alert.err === "title"}
                helperText={alert.err === "title" && alert.msg}
                InputProps={{
                    classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                    },
                }}
                InputLabelProps={{
                    classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                    },
                }} 
              />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.buttonContainer}>
          <Button disabled={alert.isLoading} className={classes.buttonOne} onClick={handleCreateStaff} autoFocus>
           {alert.isLoading ? <CircularProgress className={classes.progress}/> : "Add staff"}
          </Button>
          <Button className={classes.buttonTwo} onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
