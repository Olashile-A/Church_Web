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
import LinkAccount from '../LinkAccount';
import Transfer from '../Transfer';
import Withdrawal from '../Withdrawal';
import Transactions from '../Transactions';
import { connect } from 'react-redux';
import { setReset, setWithdrawReset, setTransferReset } from '../../../store/actions'


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

const mapDispatchToProps ={
  setReset,
  setWithdrawReset,
  setTransferReset,
};
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
  container: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
}));

function SimpleTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleReset = () => {
    const { setReset, setWithdrawReset, setTransferReset } = props;
    setReset()
    setWithdrawReset()
    setTransferReset()
  }
  
  const handleChangeIndex = (index) => {
    setValue(index);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Typography className={classes.headerTitle} >
          Wallet
        </Typography>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary"
          textColor="primary" aria-label="simple tabs example" centered >
          <Tab label="Wallet" {...a11yProps(0)}  style={{fontSize: 12, minWidth: 25}}/>
          <Tab label="Link Acount" {...a11yProps(1)} onClick={handleReset} style={{fontSize: 12, minWidth: 25}}/>
          <Tab label="Transfer" {...a11yProps(2)} onClick={handleReset} style={{fontSize: 12, minWidth: 25}}/>
          <Tab label="Withdrawal" {...a11yProps(3)} onClick={handleReset} style={{fontSize: 12, minWidth: 25}}/>
          <Tab label="Transaction" {...a11yProps(4)} onClick={handleReset} style={{fontSize: 12, minWidth: 25}}/>
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
              <LinkAccount />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Transfer />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Withdrawal />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Transactions />
            </TabPanel>
        </SwipeableViews>
        </Card>
      </div>
     
    </div>
  );
}

export default connect(null, mapDispatchToProps)(withRouter(SimpleTabs))
