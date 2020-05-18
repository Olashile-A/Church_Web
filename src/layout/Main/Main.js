import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import { withRouter }  from 'next/router'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Sidebar, Topbar, Footer } from './components';
// import uuid from 'uuid';
// import Axios from 'axios';
// import { config } from '../../../config';
// import { setUserDetails, setCurrencyRates } from "../../actions/data"
// import { connect } from 'react-redux';
// import Router from "next/router";



const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  },
  
}));

// const mapDispatchToProps = {
//   setUserDetails,
//   setCurrencyRates
// };

const Main = props => {
  const { children, setUserDetails, setCurrencyRates } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const handleChange = name => event => {
    setValue({ ...value, [name]: event.target.value });
  };
  
  
  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <React.Fragment>
      <div
        className={clsx({
          [classes.root]: true,
          [classes.shiftContent]: isDesktop
        })}
      >
        <Topbar onSidebarOpen={handleSidebarOpen} />
        <Sidebar
          onClose={handleSidebarClose}
          open={shouldOpenSidebar}
          variant={isDesktop ? 'persistent' : 'temporary'}
        />
        <main className={classes.content}>
          {children}
        </main>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default withRouter(Main);
// export default connect(null, mapDispatchToProps)(withRouter(Main));
