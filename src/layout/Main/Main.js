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


  // useEffect(() => {
  //   const fetchData = async () => {
  //     let token = sessionStorage.getItem("token");
  //     if (token) {
  //       try {
  //         const user = await Axios.get(config.getUser, { headers: { "x-auth-token": token } });  
  //         console.log("user", user);

  //         setUserDetails(user.data);

  //       } catch (error) {
  //         console.log("error", error);
  //         Router.push("/");
  //         console.log("error", error.response); 
  //       }
  //     } else {
  //       Router.push("/");
  //     }

  //     const requestId = uuid();
  //     const userName = uuid();

  //     let currencyRates = await Axios.post(config.currencyRate, 
  //       {
  //         requestId,
  //         userName
  //       }
  //     );

  //     console.log('currencyRates', currencyRates);

  //     setCurrencyRates(currencyRates.data);
  //   }

  //   fetchData();
  // }, [])

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };


  const [ modal, modalVisible ] = React.useState(false);

  const handleClickOpen = () => {
    modalVisible( true );
  };

  const handleModalClose = () => {
    modalVisible( false );
  };

  const [ value, setValue ] = React.useState({
    password: "",
    confirmPassword: '',
    err: '',
    msg: ''
  });

  const handleChange = name => event => {
    setValue({ ...value, [name]: event.target.value });
  };

  
  const handleModalOk = () => {

    if ( value.password === '') {
      setValue({
        err: 'password',
        msg: 'password can not be empty'
      })
      return;
    }

    if ( value.password !== value.confirmPassword) {
      setValue({
        err: 'confirmPassword',
        msg: 'password does not match'
      })
      return;
    }
    
    modalVisible( false )

  }

  
  
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
