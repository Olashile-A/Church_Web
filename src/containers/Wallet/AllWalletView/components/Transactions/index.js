import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from './Table';

const useStyles = makeStyles( (theme) =>({
  root: {
    // width: 467,
    height: 340,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #E2E2E2',
    borderRadius: 5,
    opacity: 1
  },
  headerText: {
    color: '#616781',
    opacity: 1,
    fontSize: 17,
    fontWeight: '500'
  },
  title: {
    fontSize: 12,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 3, 1, 3 ),
    borderBottom: '1px solid grey'
  },
  button: {
      color: '#FD0E31'
  }
}));

export default function Transactions(props) {
  const classes = useStyles();
  const {className} = props

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
          <Typography className={classes.headerText}>Transactions</Typography>
          <div>
            <Button
            className={classes.button}
            >
                View All
            </Button>
          </div>
      </div>
      <div >
      <Table />
      </div>
    </Card>
  );
}
