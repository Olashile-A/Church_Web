import React from 'react';
import PropTypes from 'prop-types';
import {fade, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import SwipeableViews from 'react-swipeable-views';
import { withRouter } from "next/router";
// import PersonalInformation from './PersonalInformation'

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
        <Box p={3}>
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
    // padding: theme.spacing(4)
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: 'transparent',
    boxShadow: 'none',
    borderBottom: '1px solid grey'
  },
  container:{
    border: '1px solid #E2E2E2',
    borderRadius: 5
  },
  textOne: {
    textAlign: 'left',
    font: 17,
    fontWeight: 'regular',
    color: '#9B9B9B',
    width: 175, 
    height: 36,
    padding: theme.spacing(2,0)
  },
  textTwo: {
    textAlign: 'left',
    font: 17,
    fontWeight: 'regular',
    color: '#101424',
    width: 175, 
    height: 36,
    padding: theme.spacing(2,0)
  },
  textThree: {
    textAlign: 'left',
    font: 17,
    fontWeight: 'regular',
    color: '#FD0E31',
    width: 175, 
    height: 36,
    padding: theme.spacing(2,0)
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#101424',
    paddingTop:  theme.spacing(1),
    marginLeft: theme.spacing(7)
  },
  content: {
    fontSize: 14,
    fontWeight: 'regular',
    color: '#707070',
    paddingTop:  theme.spacing(1),
    marginLeft: theme.spacing(8)
  },
  grid : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
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
        <Tabs value={value} onChange={handleChange} indicatorColor="primary"
          textColor="primary" aria-label="simple tabs example" centered >
          <Tab label="Personal Information" {...a11yProps(0)} />
          <Tab label="Settings" {...a11yProps(1)} />
          <Tab label="Others" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <div className={classes.card}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
          <TabPanel value={value} index={0} >
            <Grid container spacing={1}  direction='column' >
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Full Name</Typography>
                <Typography gutterBottom className={classes.textTwo}> Adeniran Opeyemi</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}>Email Address</Typography>
                <Typography gutterBottom className={classes.textTwo}>adeniran@gmail.com</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Sex </Typography>
                <Typography gutterBottom className={classes.textTwo}>Female</Typography>
            </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Country </Typography>
                <Typography gutterBottom className={classes.textTwo}> Nigeria </Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> City</Typography>
                <Typography gutterBottom className={classes.textTwo}>Lagos</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Church</Typography>
                <Typography gutterBottom className={classes.textTwo}>Exalt Church</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textOne}> Church Branch</Typography>
                <Typography gutterBottom className={classes.textTwo}>Exalt Church, Lekki Branch</Typography>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container spacing={1}  direction='column' >
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textTwo}> Edit Profile</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} className={classes.grid}>
                <Typography gutterBottom className={classes.textTwo}>Change Password</Typography>
              </Grid>
              <Divider />
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container spacing={1}  direction='column' >
              <Grid item xs={12}>
                <Typography gutterBottom className={classes.textTwo}> Privacy and Payment</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12}>
                <Typography gutterBottom className={classes.textTwo}>Help Center</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} >
                <Typography gutterBottom className={classes.textTwo}> Terms and Condition</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12}>
                <Typography gutterBottom className={classes.textTwo}> About Church App</Typography>
              </Grid>
              <Divider />
              <Grid item xs={12}>
                <Typography gutterBottom className={classes.textThree}> Logout</Typography>
              </Grid>
              <Divider />
            </Grid>
          </TabPanel>
      </SwipeableViews>
      </div>
    </div>
  );
}

export default withRouter(SimpleTabs)
