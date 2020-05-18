import React from 'react';
import PropTypes from 'prop-types';
import {fade, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import SwipeableViews from 'react-swipeable-views';
import { withRouter } from "next/router";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import InputBase from '@material-ui/core/InputBase';
import WalletTab from '../WalletTab'


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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 2),
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: '#FFFFFF',
    boxShadow: 'none',
    borderBottom: '1px solid grey'
  },
  headerTitle: {
    color: '#101424',
    opacity: 1,
    fontSize: 17,
    fontWeight: 'bold',
    padding: theme.spacing(2),
  },
  headerTwo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 3, 1, 1 ),
    borderBottom: '1px solid grey',
    background: '#FCFCFC 0% 0% no-repeat padding-box'
  },
}));

function SimpleTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleViewMessage = () => {
    const { router } = props;
    router.push('/prayerrequest/inboxview')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Typography className={classes.headerTitle} >
          Wallet
        </Typography>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary"
          textColor="primary" aria-label="simple tabs example" centered >
          <Tab label="Wallet" {...a11yProps(0)} />
          <Tab label="Link Acount" {...a11yProps(1)} />
          <Tab label="Transfer" {...a11yProps(2)} />
          <Tab label="Withdrawal" {...a11yProps(3)} />
          <Tab label="Transaction" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      
      <div className={classes.card}>
        <Card className={classes.container}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
            <TabPanel value={value} index={0} >
              <WalletTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
            </TabPanel>
            <TabPanel value={value} index={2}>
            </TabPanel>
            <TabPanel value={value} index={3}>
            </TabPanel>
            <TabPanel value={value} index={4}>
            </TabPanel>
        </SwipeableViews>
        </Card>
      </div>
     
    </div>
  );
}

export default withRouter(SimpleTabs)
