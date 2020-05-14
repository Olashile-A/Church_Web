import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#FE98A7', 0.5),
    width: '70%',
    height: 7,
    borderRadius: 20,
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#FD0E31',
  },
})(LinearProgress);



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 1, 1, 2)
  },
  margin: {
    margin: theme.spacing(0, 0, 4, 8),
  },
}));

export default function CustomizedProgressBars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={50}
      />
    </div>
  );
}
