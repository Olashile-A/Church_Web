import React, {useRef}from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Card, CardContent, Divider } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Warning from "@material-ui/icons/Warning";
import List from "@material-ui/core/List";
import clsx from 'clsx';
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 150,
    // height: 250,
    border: '1px solid #D8D8D8',
    borderRadius: 8,
  },
  button: {
    // color: 'grey',
    padding: '12px 0px',
    justifyContent: 'flex-start',
    textTransform: 'none', 
    borderRadius: 'none', 
    letterSpacing: 0,
    width: '100%',
    height: 40,
    '&: hover': {
      background: 'none'
    },
  },
  title: {
    color: '#616781',
    textTransform: 'capitalize',
    opacity: 1,
    fontSize: 12,
    marginLeft: theme.spacing(2)
  },
  active: {
    fontWeight: theme.typography.fontWeightMedium,
    '&$title':{
      color: '#FFFFFF',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&$button':{
      color: '#FFFFFF',
      fontWeight: theme.typography.fontWeightMedium,
    },
    borderRadius: 0
  },

}));



const Wallets = (props) => {
  const classes = useStyles();
  const { titles, handleWalletSwitch, wallet } = props;

  // console.log('props', props);
  

  return (
    <Container disableGutters>
    <Card className={classes.container}>
        {wallet.map(tit => (
            <div key={tit.val} value={tit._id}>
                <Button onClick={handleWalletSwitch(tit._id)}
                    className={clsx(classes.button, tit.title && classes.active)} 
                >
                    <div>
                        <Typography  className={clsx(classes.title, tit.title && classes.active)}>
                        {tit.name}
                        </Typography>
                    </div>
                    
                </Button>
                <Divider />
            </div>
        ))}
    </Card>
    </Container>
   
  );
};

export default Wallets;
