/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { useRef, useEffect, forwardRef } from 'react';
// import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { withRouter } from "next/router";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: blueGrey[800],
    padding: '12px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none', 
    letterSpacing: 0,
    width: '100%',
    height: 35,
    marginLeft: theme.spacing(3),
    '&:hover': {
      color: theme.palette.primary.main
    },
  },
  icon: {
    color: theme.palette.icon,
    width: 13,
    height: 9,
    opacity: 1,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  title: {
    color: '#616781',
    textTransform: 'capitalize',
    opacity: 1,
    fontSize: 12,
    marginLeft: theme.spacing(2),
    '&:hover': {
      color: theme.typography.fontWeightMedium
    },
  },
  active: {
    color: '#FFFFFF',
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: '#FD0E31'
    },
    '& $title': {
      color: '#FFFFFF',
      fontWeight: theme.typography.fontWeightMedium,
    },
    borderRight: '3px solid #FD0E31',
    borderRadius: 0,
    backgroundColor: theme.palette.action.selected
  },
}));


const SidebarNav = props => {
  const { pages, className, router, ...rest } = props;
  console.log("router", router);
  
  const classes = useStyles(props);

  useEffect(() => {
    const fetchData = async () => {
      
    fetchData();
    }
  }, [])
  
  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {pages.map(page => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Button
            // activeClassName={classes.active}
            className={clsx(classes.button, page.href === router.asPath && classes.active)} 
            // className={classes.button}
            href={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {/* <div  >{page.title}</div> */}
            <div>
                <Typography className={clsx(classes.title, classes.activ)}>
                {page.title}
                </Typography>
            </div>
            
          </Button>
          {/* <Divider /> */}
        </ListItem>
      ))}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default withRouter(SidebarNav);
