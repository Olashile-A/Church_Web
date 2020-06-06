import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useRouter } from "next/router";
import InputAdornment from '@material-ui/core/InputAdornment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ScheduleIcon from '@material-ui/icons/Schedule';



const useStyles = makeStyles(theme => ({
  root: {
     padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    border: 0
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#101424',
    padding: theme.spacing(2, 0),
    // borderBottom: '1px solid #E2E2E2',
  },
  card: {
    width: 398,
    height: 500,
    border: '1px solid #E2E2E2',
    borderRadius: 5
  },
  textField: {
    // width: '100%',
    height: 40,
    margin: '9px 0px'
  },
  button: {
    marginTop: theme.spacing(3),
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
  testButton: {
    marginTop: theme.spacing(1),
    width: 366,
    height: 35,
    background: 'none',
    borderRadius: 4,
    fontWeight: 'bold',
    fontSize: '15',
    color: '#FD0E31',
    '&:hover': {
      background: 'none',
    }
  },
  formControlTwo: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

const SendPushNotification = (props) => {
  const classes = useStyles();
  const router = useRouter();
  
  const [value, setValue] = React.useState({
    type: 'one',
  });

  const handleChange = name => e => {
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  const handleUpload = () => {
    router.push('/dashboard/resources/upload-form')
  };

  return (
    <div className={classes.root}>
        <Container maxWidth="sm">
            <Typography className={classes.headerText}> Send Push Notification </Typography>
            <Card className={classes.card}>
            <CardContent>
                <Grid container spacing={2} justify='center'>
                <Grid item  xs={12} >
                    <TextField
                        // accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        // onChange={this.handleImage}
                        fullWidth
                        variant="outlined"
                        label="Notification Title"
                        fullWidth
                        variant="outlined"
                        className={classes.textField}
                    />
                </Grid>
                <Grid item  xs={12} >
                    <TextField
                        // accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        // onChange={this.handleImage}
                        fullWidth
                        variant="outlined"
                        label="Notification Message"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        // className={classes.textField}
                    />
                </Grid>
                <Grid item sm={6} xs={12} >
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
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <DateRangeIcon />
                            </InputAdornment>
                            )
                        }}
                    />
                </Grid>
                <Grid item sm={6} xs={12} >
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Publish Time"
                        type="time"
                        fullWidth
                        variant="outlined"
                        autoComplete="fname"
                        className={classes.textField}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <ScheduleIcon />
                            </InputAdornment>
                            )
                        }}
                    
                    />
                </Grid>
                <Grid item  xs={12} >
                    <FormControl component="fieldset" className={classes.formControlTwo}>
                    <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        value={value.type}
                        onChange={handleChange("type")}
                        defaultValue="top"
                    >
                    <FormControlLabel
                        value="one"
                        control={<Radio color="primary" />}
                        label="Local Publish"
                        labelPlacement="start"
                    />

                    <FormControlLabel
                        value="two"
                        control={<Radio color="primary" />}
                        label="Global Publish"
                        labelPlacement="start"
                    />
                    </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} >
                    <Button className={classes.button} onClick={handleUpload}>
                     Publish
                    </Button>
                </Grid>
                <Grid item xs={12} >
                    <Button className={classes.testButton} onClick={handleUpload}>
                     Test Notification
                    </Button>
                </Grid>
                </Grid>
            </CardContent>
            </Card>
        </Container>
    </div>
  );
};

export default SendPushNotification;
