import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from './Table';
import axios from 'axios';
import { endpoint } from '../../../../../endpoint';
import { config } from '../../../../../config';

const useStyles = makeStyles( (theme) =>({
  root: {
    // width: 467,
    height: 284,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #E2E2E2',
    borderRadius: 5,
    opacity: 1
  },
  headerText: {
    color: '#616781',
    opacity: 1,
    fontSize: 14,
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

export default function RecentDonation(props) {
  const classes = useStyles();
  const {className} = props
  const [recentTransaction, setRecentTransaction] = React.useState([])

  useEffect(() => {
    const fetchData = async () => {
      let token = sessionStorage.getItem('token')
      
      if (token) {
        try {
          let headers = {
            'publicToken' : config.publicToken,
            'x-auth-token': token
          }
          let recent = await axios.get(endpoint.getRecentTransactions, 
            {"headers" : headers}
          )
          console.log('recent', recent);
          setRecentTransaction(recent.data)
        } catch (error) {
          console.log('error', error);
          console.log('error', error.response);
        }
      }
    }

    fetchData();
  }, [])

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
      <Table 
        recentTransaction={recentTransaction}
      />
      </div>
    </Card>
  );
}
