import React from 'react';
import Container from '@material-ui/core/Container';
import Login from '../src/containers/Login';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url('/static/images/signUp_background.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  buttonContainer: {
    padding: theme.spacing(3, 0)
  },
  sigupSubmit: {
    marginLeft: theme.spacing(4),
    width: 171,
    height: 46,
    background: '#FFFFFF',
    boxShadow: '0px 3px 6px #00000029',
    border: '2px solid #FFFFFF',
    borderRadius: 7,
    opacity: 1
  },
  cardHeader: {
    padding: theme.spacing(3, 4),
    color: '#FFFFFF',
    fontSize:  35
  },
  body: {
    padding: theme.spacing(3,4),
    color: 'white',
    fontSize:  14,
  },
  card: {
    background: 'rgb(255, 255, 255, 0)',
    height: 500,
    width: 500, // Fix IE 11 issue.
    padding: theme.spacing(10, 0),
    margin: theme.spacing(10),
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center'
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={4} component="div" elevation={6} square>
        <Login />
      </Grid>
      <Grid item xs={false} sm={4} md={8} className={classes.image}>
      <div className={classes.card}>
        <Typography component='h1' variant='h4' className={classes.cardHeader}>
            Don't have an account?
        </Typography>
        <Typography component='h1' variant='h5' className={classes.body}>
            Need access? Click the button below to request for user and password. 
            Our support team will contact you within 24 hours, once your congregation 
            activation is completed. 
        </Typography>

        <div className={classes.buttonContainer}>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              // disabled={isLoading}
              // onClick={this.handleLogin}
              className={classes.sigupSubmit}
          >
              Get Access Now
          </Button>
        </div>
     </div>
      </Grid>
    </Grid>
  );
}
