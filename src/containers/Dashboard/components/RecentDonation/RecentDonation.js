import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '../../../../components/Table/Table';

const useStyles = makeStyles( (theme) =>({
  root: {
    // width: 467,
    height: 279,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #E2E2E2',
    borderRadius: 5,
    opacity: 1
  },
  headerText: {
    color: '#616781',
    opacity: 1,
    fontSize: 20,
    fontWeight: '500'
  },
  title: {
    fontSize: 14,
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

export default function RecentDonation(props) {
  const classes = useStyles();
  const {className} = props

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
          <Typography className={classes.headerText}> Recent Donation</Typography>
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
