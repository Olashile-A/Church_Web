import React from './node_modules/react';
import clsx from './node_modules/clsx';
import PropTypes from './node_modules/prop-types';
import { makeStyles } from './node_modules/@material-ui/styles';
import { Avatar, Typography } from './node_modules/@material-ui/core';
// import { connect } from "react-redux";


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: 'fit-content',
    display: 'flex',
    justifyContent: 'flex-end'
    
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 190,
    height: 56,
    background: '#000000 0% 0% no-repeat padding-box',
    borderRadius: 7,
    padding: 7
  },
  avatar: {
    width: 30,
    height: 30
  },
  head: {
    marginLeft: 10
  },
  name: {
    color: 'grey',
    fontSize: 13
  },
  post: {
    color: 'white',
    fontSize: 12
  }
}));



const Profile = props => {
  const { className, account, ...rest } = props;

  const classes = useStyles();

  const user = {
    // name: account.userDetails && account.userDetails.firstName + " " + account.userDetails.lastName,
    avatar: "/static/images/signUp_background.png",
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    > 
        <div className={classes.container}>
            <Avatar
            alt="Person"
            className={classes.avatar}
            src={user.avatar}
            />
        
        
            <div className={classes.head}>
                <Typography
                    className={classes.name}
                    variant="h5"
                >
                    Randy Olashile
                </Typography>
                <Typography
                    className={classes.post}
                    variant="h6"
                >
                    Pastor Evang.
                </Typography>
            </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;