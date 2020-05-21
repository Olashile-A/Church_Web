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
import Audio from '../Auddio';
import Video from '../Viddeo';


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
    borderBottom: '1px solid #E2E2E2',

  },
  headerTitle: {
    color: '#101424',
    opacity: 1,
    fontSize: 17,
    fontWeight: 'bold',
    padding: theme.spacing(1)
  },
  container:{
    border: '1px solid #E2E2E2',
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 600,
    weidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: '100%'
  }
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
 
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Typography className={classes.headerTitle} >
          Resources
        </Typography>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary"
          textColor="primary" aria-label="simple tabs example" centered >
          <Tab label="Audio" {...a11yProps(0)} />
          <Tab label="Video" {...a11yProps(1)} />
          {/* <Tab label="Replied" {...a11yProps(2)} /> */}
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
              <Audio />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Video />
            </TabPanel>
        </SwipeableViews>
        </Card>
      </div>
     
    </div>
  );
}

export default withRouter(SimpleTabs)
