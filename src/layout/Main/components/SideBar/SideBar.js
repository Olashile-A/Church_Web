import React from './node_modules/react';
import clsx from './node_modules/clsx';
import PropTypes from './node_modules/prop-types';
import { makeStyles } from './node_modules/@material-ui/styles';
import { Divider, Drawer } from './node_modules/@material-ui/core';
import DashboardIcon from './node_modules/@material-ui/icons/Dashboard';
import SideBarHeader from "../../../../components/Header/SidebarHeader"
import FormatAlignCenterIcon from './node_modules/@material-ui/icons/FormatAlignCenter';
import ImportContactsIcon from './node_modules/@material-ui/icons/ImportContacts';
import AirplayIcon from './node_modules/@material-ui/icons/Airplay';
import HeadsetIcon from './node_modules/@material-ui/icons/Headset';
import EventNoteIcon from './node_modules/@material-ui/icons/EventNote';
import ChatBubbleOutlineOutlinedIcon from './node_modules/@material-ui/icons/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from './node_modules/@material-ui/icons/NotificationsNoneOutlined';
import AccountBalanceWalletIcon from './node_modules/@material-ui/icons/AccountBalanceWallet';
import PersonAddIcon from './node_modules/@material-ui/icons/PersonAdd';
import AccountBoxIcon from './node_modules/@material-ui/icons/AccountBox';

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
      href: "/dashboard/in",
      icon: <DashboardIcon />
    },
    {
      title: "Pastor Planner",
      href: "/dashboard/pastorplanner",
      icon: <FormatAlignCenterIcon />

    },
    {
      title: "Event Planner",
      href: "/dashboard/eventplanner",
      icon: <ImportContactsIcon />

    },
    {
      title: "Prayer Request",
      href: "/dashboard/prayerrequest",
      icon: <EventNoteIcon />

    },
    {
      title: "Live Stream",
      href: "/dashboard/livestream",
      icon: <AirplayIcon />

    },
    {
      title: "Resources",
      href: "/dashboard/resources",
      icon: <HeadsetIcon />

    },
    {
        title: "Chatroom",
        href: "/dashboard/in",
        icon: <ChatBubbleOutlineOutlinedIcon />
  
    },
    {
        title: "Push Notification",
        href: "/dashboard/push-notification",
        icon: <NotificationsNoneOutlinedIcon />
  
    },
    {
        title: "Wallet",
        href: "/dashboard/wallet",
        icon: <AccountBalanceWalletIcon />
  
    },
    {
        title: "Register User",
        href: "/dashboard/register-user",
        icon: <PersonAddIcon />
  
    },
    {
        title: "Admin User",
        href: "/dashboard/admin-user",
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
      variant={variant}
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
