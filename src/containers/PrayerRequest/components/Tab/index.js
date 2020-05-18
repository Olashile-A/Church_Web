import React from 'react';
import PropTypes from 'prop-types';
import {fade, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import SwipeableViews from 'react-swipeable-views';
import { withRouter } from "next/router";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

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
    padding: theme.spacing(4)
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: 'transparent',
    boxShadow: 'none',
    borderBottom: '1px solid grey'
  },
  headerTitle: {
    color: '#101424',
    opacity: 1,
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: theme.spacing(1)
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#d4d4d4', 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.8),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    height: '95%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    paddingTop: 4
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#8D8D8D'
  },
  inputRoot: {
    color: 'black'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    // border: '1px',
    borderRadius: 6,
    // '&:active': {
    //     backgroundColor: fade('#d4d4d4', 0.8),
    // },
  },
  card: {
    paddingTop: theme.spacing(1),
  },
  container:{
    border: '1px solid #E2E2E2',
    borderRadius: 5
  },
  bodyContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: fade('rgba(245, 245, 245)', 0.8),
      borderRadius: 6,
    },
    padding: 4,
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
  },
  circle: {
    width: 40,
    height: 40,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #E2E2E2',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  initials: {
    fontSize: 12
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
  time: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#707070',
    paddingTop: theme.spacing(1),
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

  const handleViewMessage = () => {
    const { router } = props;
    router.push('/prayerrequest/inboxview')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Typography className={classes.headerTitle} >
          Pastor Request
        </Typography>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary"
          textColor="primary" aria-label="simple tabs example" centered >
          <Tab label="All Request" {...a11yProps(0)} />
          <Tab label="Inbox" {...a11yProps(1)} />
          <Tab label="Replied" {...a11yProps(2)} />
        </Tabs>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon />
            </div>
            <InputBase
            placeholder="Search…"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            />
        </div>
      </AppBar>
      <div className={classes.card}>
      <Card className={classes.container}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
          <TabPanel value={value} index={0} >
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
         
          </TabPanel>
          <TabPanel value={value} index={1}>
          <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
          <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
            <div className={classes.bodyContainer} onClick={handleViewMessage} >
              
              <div className={classes.body} >  
                <div className={classes.circle}  gutterBottom>
                  <Typography className={classes.initials}>M A</Typography>
                </div>
                <Typography className={classes.name} color="textSecondary" gutterBottom>
                  Mayowa Adebowale
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  Your Google Account was just signed in to from a new windows device.
                </Typography>
              </div>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM
              </Typography>
            </div>
          </TabPanel>
      </SwipeableViews>
      </Card>
      </div>
    </div>
  );
}

export default withRouter(SimpleTabs)
