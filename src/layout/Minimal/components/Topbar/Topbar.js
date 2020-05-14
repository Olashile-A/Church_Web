import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Link from "../../../../Link";




const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "none"
  },
  header: {
    color: "#e5e5e5"
  },
  headName: { color: "white", fontFamily: "monospace" },
  link: { display: "flex", justifyContent: "center", alignItems: "center" }
}));

const Topbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles(); 

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <Link href="/" className={classes.link}>
          <img alt="Logo" src="/static/images/logo.png" />
          <Typography variant="h2" className={classes.headName}>
            CLAM
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
