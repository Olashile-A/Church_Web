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
import { Paper } from '@material-ui/core';
import { useRouter } from 'next/router';
import Radio from '@material-ui/core/Radio';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    border: 0

  },
  container: {
    width: '60vh',
    border: '1px solid grey',
    padding: theme.spacing(3),
  },
  img: {
    width: 84,
    height: 50,
    borderRadius: 4,
  },
  imgTube: {
    width: 84,
    height: 55,
    borderRadius: 4,
  },
  imgInstaContainer: {
    width: 84,
    height: 55,
    background: '#FEC957 0% 0% no-repeat padding-box',
    opacity: 0.15
  },
  imgInsta: {
    width: 74,
    height: 29
  },
  paper: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    padding: theme.spacing(3),
    width: 398,
    height: 78,
    alignItems: 'center'
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  card: {
    height: 469,
    width: 440,
    border: '1px solid #E2E2E2',
    borderRadius: 5
  },
  header: {
    borderBottom: '1px solid #E2E2E2',
    padding: theme.spacing(2)
  }, 
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#101424'
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(3)
  },
  continueButton: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(4),
    width: 116,
    height: 40,
    textAlign: 'center',
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 4,
    '&:hover': {
      background: '#FD0E31 0% 0% no-repeat padding-box',
      color: '#EEEEE'
    }
  },
  text: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'regular',
    color: '#000000',
    marginLeft: 16,
    padding: theme.spacing(1)
  },
  content: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'regular',
    color: '#000000',
    marginLeft: 16,
  },
  cardContent: {
    width: 399,
    height: 399
  },
  // radio: {
  //   display: 'flex',
  //   justifyContent: 'flex-end'
  // }
}));

const cards = [1, 2];


const LiveStream = () => {
  const classes = useStyles();
  const router = useRouter();

  const [selectedValue, setSelectedValue] = React.useState('Facebook');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleContinue = () => {
    router.push({
      pathname: '/dashboard/livestream/livestreamform/',
      query: { type: selectedValue }
    })
    
  }

  const docs = {
    facebook: '/static/images/facebook.png',
    youtube: '/static/images/youtube.png',
    instagram: '/static/images/instagram.png'
  }

  return (
    <div className={classes.root}>
        
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={3}>
              <Grid item  xs={12} sm={6}>
                <Card className={classes.card}>
                  <div className={classes.header}>
                    <Typography  className={classes.headerText} >
                        Select Live Stream Channel
                    </Typography>
                  </div>
                  <CardContent>   
                    <Grid container spacing={1}>
                        <Grid item  xs={12} >
                            <Paper className={classes.paper}>
                              <img src={docs.facebook} className={classes.img} />
                              <div className={classes.body}>
                                <Typography className={classes.text}>Facebook LiveStream</Typography>
                                <Radio
                                  checked={selectedValue === 'Facebook'}
                                  onChange={handleChange}
                                  value="Facebook"
                                  name="radio-button-demo"
                                  inputProps={{ 'aria-label': 'Facebook' }}
                                  color="primary"
                                  className={classes.radio}
                                />
                              </div>
                            </Paper>
                        </Grid>
                        <Grid item  xs={12} >
                            <Paper className={classes.paper}>
                              <img src={docs.youtube} className={classes.imgTube} />
                              <div className={classes.body}>
                                <Typography className={classes.text}>Youtube LiveStream</Typography>
                                <Radio
                                  checked={selectedValue === 'Youtube'}
                                  onChange={handleChange}
                                  value="Youtube"
                                  name="radio-button-demo"
                                  inputProps={{ 'aria-label': 'Youtube' }}
                                  color="primary"
                                  className={classes.radio}
                                />
                              </div>
                            </Paper>
                        </Grid>
                        <Grid item  xs={12}>
                            <Paper className={classes.paper}>
                              <div className={classes.imgTubeAndInsta}>
                                  <img src={docs.instagram} className={classes.imgInsta} />   
                              </div>
                              <div className={classes.body}>
                                <Typography className={classes.text}>Instagram LiveStream</Typography>
                                <Radio
                                  checked={selectedValue === 'Instagram'}
                                  onChange={handleChange}
                                  value="Instagram"
                                  name="radio-button-demo"
                                  inputProps={{ 'aria-label': 'Instagram' }}
                                  color="primary"
                                  className={classes.radio}
                                />
                              </div>
                            </Paper>
                        </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions className={classes.button}>
                    <Button size="medium" color="secondary" className={classes.continueButton} onClick={handleContinue}>
                      Continue
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6}>
                <Card className={classes.card}>
                  <div className={classes.header}>
                    <Typography className={classes.headerText}>
                        Integration SetUp
                    </Typography>
                  </div>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom className={classes.content}>
                        Welcome to your live stream channel integration page. On this panel,
                        you will be guided on how to integrate your live streaming channel
                        to your Mobile and Web channel in your app.
                    </Typography>
                    <Typography gutterBottom  className={classes.content}>
                        1. Go to the Url page of the Social media page e.g https://www.facebook.com.
                    </Typography>
                    <Typography gutterBottom className={classes.content}>
                        2. Login with your Username and password.
                    </Typography>
                    <Typography gutterBottom className={classes.content}>
                        3. Simply follow the step for integration,  Select the social media channel you want to stream your services from.
                    </Typography>
                    <Typography gutterBottom className={classes.content}>
                        4. Copy the Url channel link
                    </Typography>
                    <Typography gutterBottom className={classes.content}>
                        5. Paste the copied Url link into the panel link on this dashboard
                    </Typography>
                    <Typography gutterBottom className={classes.content}>
                        6. Once the like is copied and paste, Click the saved button, 
                    this will complete the process to stream directly to your application.
                    </Typography>
                    <Typography gutterBottom className={classes.content}>
                        7. For assistance on setup contact support@techone.com or Call +234 90 8300 98.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
    </div>
  );
};

export default LiveStream;


     