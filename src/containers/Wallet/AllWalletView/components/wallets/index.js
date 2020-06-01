import React from 'react';
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
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 150,
    height: 155,
    border: '1px solid #D8D8D8',
    borderRadius: 8,
  },
  button: {
    // color: 'grey',
    padding: '12px 0px',
    justifyContent: 'flex-start',
    textTransform: 'none', 
    letterSpacing: 0,
    width: '100%',
    height: 38,
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
    // color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $title': {
    //   color: '#FD0E31',
      fontWeight: theme.typography.fontWeightMedium,
    },
    borderRadius: 0
  },

}));


const Wallets = (props) => {
  const classes = useStyles();
  const { titles, className } = props;

  console.log('props', props);
  

  return (
    <Paper className={classes.buttonContainer}>
        {titles.map(tit => (
            <div key={tit.val}>
                <Button
                    className={clsx(classes.button, tit.title && classes.active)} 
                >
                    <div>
                        <Typography className={classes.title}>
                        {tit.title}
                        </Typography>
                    </div>
                    
                </Button>
                {tit.val < 3 ? <Divider /> : null}
            </div>
        ))}
    </Paper>

   
  );
};

export default Wallets;
