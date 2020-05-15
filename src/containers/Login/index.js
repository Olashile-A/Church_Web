import React, { Component } from "react";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {config} from "../../../config";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from "@material-ui/core/Typography";
import { blue } from '@material-ui/core/colors';
import { useRouter } from "next/router";
import isEmail from "validator/lib/isEmail";
import IconButton from '@material-ui/core/IconButton';
import Alert from "@material-ui/lab/Alert";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from "@material-ui/core/Link";





const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  container: {
    alignItems: "center"
  },
  card: {
    background: 'linear-gradient(-150deg, #1066B1, #B9AFB6)',
    height: 450,
    width: 400, // Fix IE 11 issue.
    padding: theme.spacing(2),
    boxShadow:  '1px 2px #98A9BC',
    border: '1px #98A9BC',
    borderRadius: 5
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    width: 285,
    height: 52,
    marginBottom: 11,
  },
  link: {
    fontSize : 14,
    color: '#FD0E31',
    opacity: 1
  },
  loginSubmit: {
    margin: theme.spacing(3),
    width: 285,
    height: 52,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    border: '2px solid #FD0E31',
    borderRdius: 7,
    opacity: 1,
    color: '#FFFFFF',
    '&:hover': {
      background: '#FD0E31 0% 0% no-repeat padding-box',
      color: '#EEEEE'
    }
  },
  buttonProgress: {
    color: blue[500],
    position: "absolute",
    top: "50%",
    left: "75%",
    marginTop: 7,
    marginLeft: 7
  },
  titleContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 50
  },
  title: {
    color: '#DD0006',
    textShadow: '1px 2px #98A9BC',
  },
  header: {
    padding: theme.spacing(2, 0),
    display: 'flex',
    justifyContent: 'center',
    color: '#101424',
    fontWeight: 'bold'
  },
  header2:{
    padding: theme.spacing(1, 0, 3),
    display: 'flex',
    justifyContent: 'center',
    color: '#8D8D8D'
  },
  logo: {
    // display: 'flex',
    // flexDirection: 'row',
    width: 9,
    height: 20,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    opacity: 1,
  },
  logo2: {
    width: 9,
    height: 50,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    opacity: 1,
    marginBottom: theme.spacing(2)
  },
  logoTitle: {
    fontSize: 10
  },
  image: {
    marginLeft: theme.spacing(8)
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





const Login = ({  }) => { 
  const classes = useStyles();
  const [value, setValue] = React.useState({
    email: "",
    password: ""
  });
  const [alert, setAlert] = React.useState({
    err: "",
    msg: "",
  });
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const docs = { img: "/static/images/dove.png" };


  const handleChange = name => e => {
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setShow(!show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (!isEmail(value.email)) {
      setAlert({
        err: "email",
        msg: "Invalid email address",
      });
      return;
    }

    if (password === "") {
      setAlert({
        err: "password",
        msg: "Paasword can't be empty",
      });
      return;
    }

    router.push("/dashboard");
  };

    
  return (
    <div className={classes.paper}>
      <img src={docs.img}  className={classes.image} />
      <div className={classes.logo} />
      <Typography component="h6" variant="h6" className={classes.logoTitle}> Exalt Church</Typography>

      <div className={classes.logo2} />
      <Typography component="h1" variant="h2" className={classes.header}>
        Sign in
      </Typography>
      <Typography component="h1" variant="h4" className={classes.header2}>
        Welcome to the Exalt Church
      </Typography>


      <form className={classes.form} onSubmit={handleLogin} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={value.email}
          className={classes.textField}
          onChange={handleChange("email")}
          id="email"
          label="Email Address"
          name="email"
          autoFocus
          error={alert.err === "email"}
          helperText={alert.err === "email" && alert.msg}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            ),
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
          required
          name="password"
          id="outlined-password-input"
          label="Password"
          fullWidth
          type={show ? 'text' : 'password'}
          value={value.password}
          onChange={handleChange("password")}
          margin="normal"
          variant="outlined"
          className={classes.textField}
          error={alert.err === "pass"}
          helperText={alert.err === "pass" && alert.msg}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {show ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
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

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={loading}
          onClick={handleLogin}
          className={classes.loginSubmit}
        >
          Login
        </Button>
      <div>
        <Link href='/'  variant="body2" className={classes.link}>
          forgotten Password?
        </Link>
      </div>
      </form>
    </div>          
  )
}


export default Login;
