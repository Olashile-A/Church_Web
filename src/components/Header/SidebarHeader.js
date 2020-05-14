import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    marginLeft: theme.spacing(2)
  },
  logo: {
    // display: 'flex',
    // flexDirection: 'row',
    width: 4,
    height: 8,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    opacity: 1,
    marginLeft: theme.spacing(2)
  },
  logo2: {
    width: 4,
    height: 20,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    opacity: 1,
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  logoTitle: {
    fontSize: 8,
    color: 'white'
  },
  image: {
    marginLeft: theme.spacing(4)
  },
}));

const docs = {
  dove: "/static/images/dove.png",
};
 
export default function SimpleAppBar() {
  const classes = useStyles();
  const docs = {
    dove: "/static/images/dove.png",
  };

  return (
    <div className={classes.root}>
       <div>
          <img src={docs.dove}  className={classes.image} />
       </div>
       <div className={classes.logo} />
        <div>
          <Typography component="h6" variant="h6" className={classes.logoTitle}> Exalt Church</Typography>
        </div>
        <div className={classes.logo2} />
    </div>
  );
}
