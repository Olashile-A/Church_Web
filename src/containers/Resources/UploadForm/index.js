import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from "next/router";



const useStyles = makeStyles(theme => ({
  root: {
     padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    border: 0
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#101424',
    padding: theme.spacing(2),
    borderBottom: '1px solid #E2E2E2',
  },
  card: {
    width: 398,
    height: 450,
    border: '1px solid #E2E2E2',
    borderRadius: 5
  },
  textField: {
    width: '100%',
    height: 40,
    margin: '9px 0px'
  },
  button: {
    marginTop: theme.spacing(5),
    width: 366,
    height: 35,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 4,
    fontWeight: 'bold',
    fontSize: '15',
    color: '#FFFFFF',
    '&:hover': {
      background: '#FD0E31 0% 0% no-repeat padding-box',
      color: '#EEEEE'
    }
  },
  formControlTwo: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

const UploadForm = (props) => {
  const classes = useStyles();
  const router = useRouter();
  
  const [value, setValue] = React.useState();

  const handleChange = name => e => {
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  const handleUpload = () => {
    router.push('/dashboard/resources/upload-form')
  };

  const handleBack = () => {
    router.push('/dashboard/resources')
  };

  return (
    <div className={classes.root}>
        <Container maxWidth="sm">
        <Button className={classes.backButton} onClick={handleBack} startIcon={<ArrowBackIcon />}>
            Back
        </Button>
        <Card className={classes.card}>
          <Typography className={classes.headerText}> Upload Resource </Typography>
          <CardContent>
            <Grid container spacing={1} justify='center'>
              <Grid item  xs={12} >
                <TextField
                    // accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    // onChange={this.handleImage}
                    fullWidth
                    multiple
                    type="file"
                    variant="outlined"
                    accept="application/pdf"
                    className={classes.textField}
                />
              </Grid>
              <Grid item  xs={12} >
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Publish Date"
                  type="date"
                  fullWidth
                  variant="outlined"
                  autoComplete="fname"
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12} >
                <Button className={classes.button} onClick={handleUpload}>
                  Upload Resource
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default UploadForm;
