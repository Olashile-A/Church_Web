import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography, Button } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import { useRouter } from 'next/router';


const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(2)
    // width: '100'
  },
  img: {
    width: 103,
    height: 93,
    opacity: 0.71
  },
  text: {
    width: '100%',
    height: 17,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 17,
    color: '#101424',
    margin: theme.spacing(2,0)
  },
  button: {
    width: 131,
    height: 40,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 6,
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center'
  },
  imgCon: {
    display: 'flex',
    justifyContent: 'center'
  }

}));


const docs = {
    folder: '/static/images/empty-folder.png'
}
const Audio = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleUpload = () => {
    router.push('/dashboard/podcasts/upload-form')
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <div className={classes.imgCon}>

      <img  src={docs.folder} className={classes.img}/>
      </div>
      <Typography className={classes.text}> Podcast Archive Empty </Typography>
      <div className={classes.imgCon}>

      <Button className={classes.button} onClick={handleUpload}> Upload File </Button>
      </div>
    </Container>
  );
}; 

export default Audio;
