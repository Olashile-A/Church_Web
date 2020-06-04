import React from './node_modules/react';
import clsx from './node_modules/clsx';
import PropTypes from './node_modules/prop-types';
import { makeStyles } from './node_modules/@material-ui/styles';
import { Typography, Button, colors } from './node_modules/@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: colors.grey[50]
  },
  
  content: {
    padding: theme.spacing(3,5),
  },
  actions: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    width: 145,
    height: 36,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    borderRadius: 4,
    opacity: 1,
    padding: 0,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#101424'
  }
}));

const UpgradePlan = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.content}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.button}
        >
          Generate Report
        </Button>
      </div>
      {/* <div className={classes.actions}>
        <Button
          color="primary"
          component="a"
          variant="contained"
        >
          Upgrade
        </Button>
      </div> */}
    </div>
  );
};

UpgradePlan.propTypes = {
  className: PropTypes.string
};

export default UpgradePlan;
