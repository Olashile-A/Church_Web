import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Radio from "@material-ui/core/Radio";
import MenuItem from "@material-ui/core/MenuItem";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { setWalletRoute } from "../../../../store/actions"
import { connect } from 'react-redux';

const country = [
    {
      value: '',
      label: 'Select',
    },
    {
      value: '1',
      label: 'Nigeria',
    },
    {
      value: '2',
      label: 'America',
    },
    {
      value: '3',
      label: 'Naija',
    },
];

const city = [
    {
      value: '',
      label: 'Select',
    },
    {
      value: '1',
      label: 'Lagos',
    },
    {
      value: '2',
      label: 'Oyo',
    },
    {
      value: '3',
      label: 'Edo',
    },
];

const mapDispatchToProps ={
  setWalletRoute
};

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(1),
    // display: 'flex',
    // flexDirection: 'row',
    // marginLeft: theme.spacing(5)
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
    height: 532,
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

const AccountCardDetails = (props) => {
  const classes = useStyles();

  const [value, setValue] = React.useState({
    country: '',
    city: '',
    type: 'one',
  });

  const handleChange = name => e => {
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  const handleLink = () => {
    const { setWalletRoute } = props;
    setWalletRoute("confirmation");
  };

  return (
    <div className={classes.root}>
      <Button className={classes.backButton} startIcon={<ArrowBackIcon />}>
          Back
      </Button>
      <div>

      </div>
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <Typography className={classes.headerText}> Link Bank Account </Typography>
          <CardContent>
            <Grid container spacing={1} justify='center' align='center'>
              <Grid item  xs={12} >
                <FormControl component="fieldset" className={classes.formControlTwo}>
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    value={value.type}
                    // onChange={this.handleChanges("type")}
                    defaultValue="top"
                  >
                  <FormControlLabel
                    value="one"
                    control={<Radio color="primary" />}
                    label="Current Account"
                    labelPlacement="start"
                  />

                  <FormControlLabel
                    value="two"
                    control={<Radio color="primary" />}
                    label="Savings Account"
                    labelPlacement="start"
                  />
                  </RadioGroup>
                </FormControl>

              </Grid>
              <Grid item  xs={12} >
                <TextField
                  id="outlined-select-state"
                  select
                  label="Select Country"
                  value={value.state}
                  onChange={handleChange}
                  className={classes.textField}
                  variant="outlined"
                  >
                  {country.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                      {option.label}
                      </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item  xs={12} >
                <TextField
                  id="outlined-select-city"
                  select
                  label="Select Bank"
                  value={value.city}
                  onChange={handleChange}
                  className={classes.textField}
                  variant="outlined"
                  >
                  {city.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                      {option.label}
                      </MenuItem>
                  ))}
                </TextField>
              </Grid> 
              <Grid item  xs={12} >
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Account Number"
                  fullWidth
                  variant="outlined"
                  autoComplete="fname"
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12} >
                <Button className={classes.button} onClick={handleLink}>
                  Link Bank Account
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(AccountCardDetails);
