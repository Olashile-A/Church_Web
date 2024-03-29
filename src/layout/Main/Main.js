import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import { withRouter }  from 'next/router'
import { SideBar, Topbar, Footer } from './components';



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
        <SideBar
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
