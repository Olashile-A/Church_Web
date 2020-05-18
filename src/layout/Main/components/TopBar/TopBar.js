import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import InputIcon from '@material-ui/icons/Input';
import Link from "../../../../utils/Link";
import Router from 'next/router';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
const drawerWidth = 250;


const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none",
    [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    height: 62
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
    color: '#8D8D8D'
  },
  header: {
    color: "#e5e5e5"
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
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
  Icon: {
    color: '#8D8D8D',
    width:  20,
    height: 20
  },
  imageIcon: {
      width: 28,
      height: 28,
      borderRadius: '50%'
  },
  inputRoot: {
    color: '#8D8D8D'
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
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  link: { display: "flex", justifyContent: "center", alignItems: "center" },
  headName: { color: "white", fontFamily: "monospace" }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    Router.push("/");
  }

  const docs = {
    // name: account.userDetails && account.userDetails.firstName + " " + account.userDetails.lastName,
    img: "/static/images/signUp_background.png",
  };

  return (
    <AppBar {...rest} position='fixed' className={clsx(classes.root, className)}>
      <Toolbar>
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
        <div className={classes.flexGrow} />
        <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={0} color="secondary">
              <div >
                <NotificationsIcon className={classes.Icon}/>
              </div>
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
                <div>
                  <img src={docs.img} className={classes.imageIcon}/>
                </div>
            </IconButton>
          </div>
        {/* <Hidden mdDown> */}
          <IconButton className={classes.signOutButton} onClick={handleLogout} color="inherit">
            <InputIcon />
          </IconButton>
        {/* </Hidden> */}
        <Hidden lgUp>
          <IconButton className={classes.Icon} onClick={onSidebarOpen}>
            <MenuIcon  />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
