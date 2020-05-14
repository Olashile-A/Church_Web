import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SideBarHeader from "../../../../components/Header/SidebarHeader"
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AirplayIcon from '@material-ui/icons/Airplay';
import HeadsetIcon from '@material-ui/icons/Headset';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { Profile, SidebarNav, GenerateReport } from './components';
const drawerWidth = 250;
const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    },
  drawerPaper: {
    width: 'drawerWidth',
    },
  root: {
    background: '#101424 0% 0% no-repeat padding-box',
    boxShadow: '0px 6px 20px #00000029',
    opacity: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  rootTwo: {
    padding: theme.spacing(2),
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <DashboardIcon />
    },
    {
      title: "Pastor Planner",
      href: "/pastorplanner",
      icon: <FormatAlignCenterIcon />

    },
    {
      title: "Event Planner",
      href: "/dashboard/in",
      icon: <ImportContactsIcon />

    },
    {
      title: "Prayer Request",
      href: "/dashboard/in",
      icon: <EventNoteIcon />

    },
    {
      title: "Live Stream",
      href: "/dashboard/in",
      icon: <AirplayIcon />

    },
    {
      title: "Podcast",
      href: "/dashboard/in",
      icon: <HeadsetIcon />

    },
    {
        title: "Chatroom",
        href: "/dashboard/in",
        icon: <ChatBubbleOutlineOutlinedIcon />
  
    },
    {
        title: "Push Notification",
        href: "/dashboard/in",
        icon: <NotificationsNoneOutlinedIcon />
  
    },
    {
        title: "Wallet",
        href: "/dashboard/in",
        icon: <AccountBalanceWalletIcon />
  
    },
    {
        title: "Register User",
        href: "/dashboard/in",
        icon: <PersonAddIcon />
  
    },
    {
        title: "Admin User",
        href: "/dashboard/in",
        icon: <AccountBoxIcon />
  
    },
  ];

  return (
    <Drawer
      className={classes.drawer}
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant="permanent"
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <div className={classes.rootTwo}> 
            <SideBarHeader />
            <Profile />
        </div>
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
        <GenerateReport />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
