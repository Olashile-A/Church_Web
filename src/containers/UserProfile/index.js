import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import EditProfile from './EditProfile'
import Tab from './Tab'
import { Card, CardContent, Container, Divider } from '@material-ui/core';
import { useRouter } from 'next/router';

const count = [
    {
        value: '5',
        label: '5',
    },
    {
        value: '10',
        label: '10',
    },
    {
        value: '20',
        label: '20',
    },
    {
        value: '25',
        label: '25',
    },
];


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 9)
  },
  CardContent: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  cardTwo: {
    width: 300,
    // height: 366
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#101424',
    padding: theme.spacing(2),
    // borderBottom: '1px solid #E2E2E2',
  },
  bodyText: {
    fontSize: 15,
    fontWeight: 'regular',
    color: '#8D8D8D',
    padding: '3px 0px',
    // borderBottom: '1px solid #E2E2E2',
  },
  badgeText: {
    fontSize: 15,
    fontWeight: 'regular',
    background: 'rgba(253, 14, 49, 0.31)',
    color: '#FD0E31',
    opacity: 1,
    padding: theme.spacing(1),
    borderRadius: 9
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid #E2E2E2',
    padding: theme.spacing(1,1,1,2),
  },
  headerText: {
    // padding: theme.spacing(2),
    fontSize: 15,
    fontWeight: 'regular',
    color: '#101424',
    borderBottom: '1px solid #E2E2E2',
  },
  body: {
    display: 'flex',
    padding: theme.spacing(3, 5),
  },
  imageContainer: {
    padding: '8px 0px',
  },
  image: {
    width: 107,
    height: 107,
    borderRadius: '50%',
  },
  switch: {
   marginTop: theme.spacing(8),
  },
  button: {
    width: 120,
    height: 40,
    fontSize: 15,
    fontWeight: 'regular',
    background: '#FD0E31',
    color: '#FFFFFF'
  }


}));



const UserProfile = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);
  const router =  useRouter();

  const handleEditProfile = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false);
  };
  
  const docs = {
    image: '/static/images/signUp_background.png'
  }
  return (
    <div className={classes.root}>
        <Paper >
            <div className={classes.header}>
                <Typography className={classes.text}> My Profile</Typography>
                <Button className={classes.button} onClick={handleEditProfile}>
                    Edit Profile
                </Button>
            </div>
            <div className={classes.body}>
                <Container disableGutters maxWidth="xs">
                    <Card className={classes.cardTwo} >
                        <CardContent className={classes.CardContent}>
                            <div className={classes.imageContainer}>
                                <img  src={docs.image} className={classes.image}/>
                            </div>
                            <Typography className={classes.text}> Adeniran Yemi</Typography>
                            <Typography className={classes.bodyText}> adeniranyemi@gmail.com</Typography>
                            <Typography className={classes.bodyText}> +2349083000098</Typography>
                        </CardContent>
                        <Divider />
                        <CardContent className={classes.CardContent}>
                            <Typography className={classes.text}> Exalt Churh, Global</Typography>
                            <Typography className={classes.badgeText}> Zone 4</Typography>
                            <div >
                                <FormControl component="fieldset" className={classes.switch}>
                                    <FormGroup aria-label="position" row>
                                        <FormControlLabel
                                        value="start"
                                        control={<Switch color="primary" />}
                                        label="Active"
                                        labelPlacement="start"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </div>
                        </CardContent>
                    </Card>
                </Container>
                <Container disableGutters maxWidth="lg" >
                    <Tab />
                </Container>
            </div>
            <EditProfile 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleClose={handleClose}
            />
        </Paper>
    </div>
  );
};

export default UserProfile;
