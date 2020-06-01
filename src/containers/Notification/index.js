import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const messages = [
    {
        id: 1,
        name: 'John Smith',
        message: 'shared your post with Ab Hadley, Adolfo Hess, and 3 others.',
        time: '2 mins ago'
    },
    {
        id: 2,
        name: 'John Smith',
        message: 'shared your post with Ab Hadley, Adolfo Hess, and 3 others.',
        time: '2 mins ago'
    },
    {
        id: 3,
        name: 'John Smith',
        message: 'shared your post with Ab Hadley, Adolfo Hess, and 3 others.',
        time: '2 mins ago'
    },
    {
        id: 4,
        name: 'John Smith',
        message: 'shared your post with Ab Hadley, Adolfo Hess, and 3 others.',
        time: '2 mins ago'
    },
    {
        id: 5,
        name: 'John Smith',
        message: 'shared your post with Ab Hadley, Adolfo Hess, and 3 others.',
        time: '2 mins ago'
    },
    {
        id: 6,
        name: 'John Smith',
        message: 'shared your post with Ab Hadley, Adolfo Hess, and 3 others.',
        time: '2 mins ago'
    },
    {
        id: 7,
        name: 'John Smith',
        message: 'shared your post with Ab Hadley, Adolfo Hess, and 3 others.',
        time: '2 mins ago'
    }
]

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2,4)
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    borderBottom: '1px solid #E2E2E2'
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    // padding: theme.spacing(2),
  },
  container: {
    padding: theme.spacing(2),
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid #E2E2E2',
    padding: theme.spacing(2,0,2,0),
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#101424'
  },
  content: {
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'regular',
    color: '#101424',
    marginLeft: 6
  },
  time: {
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'regular',
    color: '#8D8D8D'
  },
  button: {
    width: 100,
    height: 35,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 6,
    color: '#FFFFFF',
    fontSize: 12
  }
}));



const Notification = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
        <Paper>
        <div className={classes.header}>
            <Typography className={classes.headerText}> Notifications</Typography>
            <Button className={classes.button} startIcon={<ClearIcon />}> Clear</Button>
        </div>
        <div className={classes.container} >
            {messages.map((message) => (
                <div key={message.id} className={classes.bodyContainer}>
                    <div className={classes.body} >  
                        <Typography className={classes.name} color="textSecondary" gutterBottom>
                            {message.name}
                        </Typography>
                        <Typography className={classes.content} color="textSecondary" gutterBottom>
                            {message.message}
                        </Typography>
                    </div>
                    <Typography className={classes.time} color="textSecondary" gutterBottom>
                        {message.time}
                    </Typography>
                </div>
                
               
            ))}
            
            </div>
        </Paper>
    </div>
  );
};

export default Notification;
