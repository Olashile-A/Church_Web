import React, {useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Tab from "./components/Tab"
import InboxView from './components/InboxView'
import InboxReply from './components/InboxReply'
import { endpoint } from '../../../endpoint';
import { config } from '../../../config';
import { connect } from 'react-redux';
import {setPrayerRequest} from '../../store/actions'
import axios from 'axios';

const mapDispatchToProps = {
  setPrayerRequest
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2,4)
  },
  
 
}));

const PrayerRequest = (props) => {
  const classes = useStyles();
  const [allPrayer, setallPrayer ] =React.useState([])
  const [inboxPrayer, setinboxPrayer ] =React.useState([])
  const [repliedPrayer, setrepliedPrayer ] =React.useState([])
  const [view, setView] = React.useState({
    general: true,
    inboxView: false,
    inboxReply: false
  })

  const handleViewMessage = (id,pray) => () => {
    const { setPrayerRequest } = props;
    setView({
      general : false,
      inboxView: true,
      inboxReply: false
    })
    setPrayerRequest(pray)  
  }

  const handleReplyMessage = () => {
    setView({
      general : false,
      inboxView: false,
      inboxReply: true
    })
  }

  const handleReplyBack = () => {
    setView({
      general : false,
      inboxView: true,
      inboxReply: false
    })
  }

  const handleViewBack = () => {
    setView({
      general : true,
      inboxView: false,
      inboxReply: false
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      let token = sessionStorage.getItem('token')
      
      if (token) {
        try {
          let headers = {
            'publicToken' : config.publicToken,
            'x-auth-token': token
          }
          let allPrayer = await axios.get(endpoint.allPrayerRequest, 
            {"headers" : headers}
          )
          let inboxPrayer = await axios.get(endpoint.inboxPrayerRequest, 
            {"headers" : headers}
          )
          let repliedPrayer = await axios.get(endpoint.repliedPrayerRequest, 
            {"headers" : headers}
          )
          console.log('prayer', allPrayer);
          setallPrayer(allPrayer.data.pr)
          
          console.log('prayer', inboxPrayer);
          setinboxPrayer(allPrayer.data.pr)

          console.log('prayer', repliedPrayer);
          setrepliedPrayer(allPrayer.data.pr)
        } catch (error) {
          console.log('error', error);
          console.log('error', error.response);
        }
      }
    }

    fetchData();
  }, [])
  return (
    <div className={classes.root}>
      {view.general && 
        <Tab 
          allPrayer={allPrayer}
          inboxPrayer={inboxPrayer}
          repliedPrayer={repliedPrayer}
          handleViewMessage={handleViewMessage}
        />}
      {view.inboxView && 
        <InboxView
          handleReplyMessage={handleReplyMessage}
          handleViewBack={handleViewBack}
        />
      }
      {view.inboxReply && 
        <InboxReply 
          handleReplyBack={handleReplyBack}
        />
      }
        
    </div>
  );
};

export default connect(null, mapDispatchToProps)(PrayerRequest);
