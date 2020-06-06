import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const docs = {
    Background: '/static/images/linkAccount.png',
}

const useStyles = makeStyles((theme) => ({
    root: {
        // minWidth: 275,
        // width: 406,
        height: 190,
        background: docs.facebook,
        borderBottom: '1px solid #E2E2E2',
        borderLeft: '1px solid #E2E2E2',
        borderRadius: 5,
        opacity: 1, 
        borderRight: 0
    },
    container: {
        height: 190,
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, -1))'
    },
    bodyContainer:{
        padding: theme.spacing(2,4)
        
    },
    buttonContainer:{
        width: 301,
        height: 52,
        padding: theme.spacing(0,4)      
    },
    button:{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFFFFF',
        width: 116,
        height: 36,
        background: '#FD0E31 0% 0% no-repeat padding-box',
        borderRadius: 4,
        opacity: 1,
    },
    text1: {
        textAlign: 'left',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#101424',
        textTransform: 'capitalize',
        opacity: 1
    },
    text2: {
        textAlign: 'left',
        fontSize: 15,
        fontWeight: 'black',
        color: '#101424',
        opacity: 1,
        width: '75%',
        
    }

}));

export default function CreateWallet(props) {
  const classes = useStyles();
  const {className, handleGetStarted} = props

  return (
    <Paper className={classes.root}
     style={{
        backgroundImage: `url(${docs.Background})`,
        backgroundPosition: 'right',
        backgroundSize: '350px 320px',
        
      }}>
        <div className={classes.container}>
            <div className={classes.bodyContainer}>
            <Typography gutterBottom className={classes.text1}> Create Wallet</Typography>
            <Typography className={classes.text2}> 
                    Easily made withdrawals by connecting your bank 
                    account to your profile, by following these simple steps.
                </Typography>
            </div>
        
            <div className={classes.buttonContainer} >
                <Button className={classes.button} onClick={handleGetStarted}>
                    Get Started
                </Button>
            </div>
            
        </div>
       

    </Paper>
  );
}


 