import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactPlayer from 'react-player'
import axios from 'axios';
import Alert from "@material-ui/lab/Alert";
import {endpoint} from '../../../../endpoint';
import {config} from '../../../../config';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    border: 0

  },
  img: {
    width: 53,
    height: 32,
    borderRadius: 4,
  },
  image: {
    width: 366,
    height: 249,
    background: '#000000 0% 0% no-repeat padding-box',
    borderRadius: 8,
  },
  card: {
    height: 500,
    width: 470,
    border: '1px solid #E2E2E2',
    borderRadius: 5
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid #E2E2E2',
    padding: theme.spacing(1),
    width:'100%'
  }, 
  headerText: {
    fontSize: 14,
    fontWeight: 'regular',
    color: '#101424',
    padding: theme.spacing(1, 2)
  },
  button: {
    display: 'flex',
    justifyContent: 'space-between',
    // padding: theme.spacing(3)
  },
  continueButton: {
    width: 116,
    height: 40,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 4,
    color: '#FFFFFF',
    '&:hover': {
      background: '#FD0E31 0% 0% no-repeat padding-box',
      color: '#EEEEE'
    }
  },
  text: {
    textAlign: 'left',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#101424',
  },
  backButton:{
    background: 'none 0% 0% no-repeat padding-box',
    borderRadius: 4,
    width:  80,
    height: 36,
    fontSize: 14,
    color: '#101424'
  },
  view: {
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
    height: 150
  },
  toggle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}));


const LiveStreamView = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const {link, country, states, city, handleViewback} = props;
  console.log('props', router.query);
  
  const [alert, setAlert] = React.useState({
    err: "",
    msg: "",
    isLoading: false
  });

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSave = async () => {
    const { link, country, states, city, name} = props;
    let token = sessionStorage.getItem('token')

    setAlert({
      err: "",
      msg: "",
      isLoading: true
    })
      
    if (token) {
      try {
        const request = {
          type: router.query.type,
          url: link,
          country,
          state: states,
          city,
          name
        }
        let headers = {
          'publicToken' : config.publicToken,
          'x-auth-token': token
        }
        let lives = await axios.post(endpoint.live,
          request, 
          {"headers" : headers}
        )
        console.log('send', lives);
        
        router.push('/dashboard/livestream')

        setAlert({
          isLoading: false
        })
      } catch (error) {
        console.log('error', error);
        console.log('error', error.response);
        setAlert({
          err: "others",
          msg: error.response.data,
          isLoading: false
        })
      }
    }
  }

  const docs = {
    facebook: '/static/images/facebook.png',
    youtube: '/static/images/youtube.png',
    instagram: '/static/images/instagram.png'
  }
  

  return (
    <div className={classes.root}>
        
        <Container className={classes.cardGrid} maxWidth="sm">
            <Button className={classes.backButton} onClick={handleViewback} startIcon={<ArrowBackIcon />}>
              Back
            </Button>
         
            <Card className={classes.card}>
              <div className={classes.header}>
                <img src={docs.facebook} />
                <Typography  className={classes.headerText} >
                    Facebook Live Stream Integration Complete
                </Typography>
              </div>
              <div className={classes.view}>
              <ReactPlayer
                url={link}
                // className={classes.image}
                playing
                width='100%'
                height='100%'
              />
              </div>
              <CardContent>   
                
                <div className={classes.toggle}>
                  <div>
                    <Typography className={classes.text}>
                      Exalt Prayer Center.
                    </Typography>
                    <Typography className={classes.text}>
                      Lekki Phase 1 Lagos Nigeria
                    </Typography>
                  </div>
                  <div>
                    <FormControl component="fieldset">
                      <FormGroup aria-label="position" row>
                        <FormControlLabel
                          value="start"
                          control={<Switch color="primary" />}
                          label="Online"
                          labelPlacement="start"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                    
                </div>
              </CardContent>
                {alert.err === "others" && <Alert severity="warning">{alert.msg}</Alert>}
              <CardActions className={classes.button}>
                <Button className={classes.buttonTwo} onClick={handleViewback}  color="primary" autoFocus>
                  Change Link
                </Button>
                <Button disabled={alert.isLoading} className={classes.continueButton} onClick={handleSave} autoFocus>
                {alert.isLoading ? <CircularProgress className={classes.progress}/> : "Save & Exit"}
                </Button>   
              </CardActions>
            </Card>
        </Container>
    </div>
  );
};

export default LiveStreamView;


     