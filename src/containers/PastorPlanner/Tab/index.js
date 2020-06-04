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
// import Table from '../Table';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import InputBase from '@material-ui/core/InputBase';
import Calender from '../Calender';
// import CreateStaffModal from '../Table/AddStaffModal';
import CreateEventModal from '../Calender/CreateEvent';


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
    padding: theme.spacing(1)
  },
  headerTwo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 3, 1, 1 ),
    borderBottom: '1px solid grey',
    background: '#FCFCFC 0% 0% no-repeat padding-box'
  },
  headerThree: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 3, 2, 1 ),
    borderBottom: '1px solid grey',
    background: '#FCFCFC 0% 0% no-repeat padding-box'
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
  subHeaderTwo: {
    display: 'flex',
    flexDirection: 'row',
  },
  subHeaderThree: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%'
  },
  todayButton: {
    width: 78,
    height: 40,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    borderRadius: 6,
    marginLeft: theme.spacing(5),
    fontSize: 10,
    border: '1px solid #D9D9D9'
  },
  taskButton: {
    width: 100,
    height: 40,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 6,
    marginLeft: theme.spacing(5),
    color: '#FFFFFF',
    fontSize: 10,
    border: '1px solid #D9D9D9'
  },
  dropButton: {
    width: 97,
    height: 40,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    borderRadius: 6,
    marginRight: theme.spacing(5),
    fontSize: 10,
    border: '1px solid #D9D9D9'
  },
  container:{
    border: '1px solid #E2E2E2',
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  textfield: {
    width: 67,
    height: 10
  },
  text: {
    margin: theme.spacing(1, 3),
    fontSize: 14,
    fontWeight: 'regular',
    color: '#000000'
  }
}));

function SimpleTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [show, setShow] = React.useState(0);
  const [drop, setDrop] = React.useState(5);
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleAddStaffOpen = () => {
    setIsOpen(true)
  }

  const handleCreateTaskOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false);
    setOpen(false)
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);

    handleClickShow();
    // setShow(!show);
  };

  const handleDropdownChange = () => {
    setDrop(drop);
  };

  const handleClickShow = () => {
    setShow(!show);
  };
  
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleViewMessage = () => {
    const { router } = props;
    router.push('/prayerrequest/inboxview')
  }

  return (
    <React.Fragment>
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Typography className={classes.headerTitle} >
          Pastor Planner
        </Typography>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary"
          textColor="primary" aria-label="simple tabs example" centered >
          <Tab label="All Tasks" {...a11yProps(0)} />
          <Tab label="Church Staff" {...a11yProps(1)} />
          {/* <Tab label="Replied" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      {!show ? 
        (<div className={classes.headerTwo}>
          <div className={classes.subHeaderTwo}>
            <Typography className={classes.text}> May 2018 </Typography>
            <Button className={classes.todayButton}> Today</Button>
            <Button className={classes.taskButton} onClick={handleCreateTaskOpen}> Create Task</Button>
          </div>
          <div className={classes.subHeaderTwo}>
            <Button className={classes.dropButton}> Completed</Button>
            <Button className={classes.dropButton}> Color tags</Button>
            <MoreHorizIcon className={classes.icon} />
          </div>
        </div>) :(
          <div className={classes.headerThree}>
            <div className={classes.subHeaderThree}>
              <Button className={classes.taskButton} onClick={handleAddStaffOpen}> Add Staff</Button>
              <Typography className={classes.text}> Show </Typography>
              <TextField
                id="outlined-select-city"
                select
                className={classes.textfield}
                value={drop}
                onChange={handleDropdownChange}
                variant="outlined"
                >
                {count.map((option) => (
                    <MenuItem key={option.value} value={option.value} style={{ height: 20}}>
                    {option.label}
                    </MenuItem>
                ))}
              </TextField>
              <Typography className={classes.text}> Entries </Typography>
            </div>
            <div className={classes.subHeaderTwo}>
              <Button className={classes.dropButton} startIcon={<FilterListIcon />}> Filter</Button>
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
            </div>
          </div>
        ) }
      <div className={classes.card}>
        <Card className={classes.container}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
            <TabPanel value={value} index={0} >
              <Calender />
            </TabPanel>
            <TabPanel value={value} index={1}>
              {/* <Table /> */}
            </TabPanel>
        </SwipeableViews>
        </Card>
      </div>
     
    </div>
    {/* <CreateStaffModal 
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleClose={handleClose}
    /> */}
    <CreateEventModal 
      open={open}
      setOpen={setOpen}
      handleClose={handleClose}
    />
    </React.Fragment>
  );
}

export default withRouter(SimpleTabs)
