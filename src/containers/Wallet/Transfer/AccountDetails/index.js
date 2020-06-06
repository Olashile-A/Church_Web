import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from '@material-ui/core/InputAdornment';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { setTransferRoute } from "../../../../store/actions"
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

const balance = [
  {
    value: '',
    label: 'Select',
  },
  {
    value: '1',
    label: '1,000',
  },
  {
    value: '2',
    label: '5,000',
  },
  {
    value: '3',
    label: '2,000',
  },
];

const mapDispatchToProps ={
  setTransferRoute
};

const useStyles = makeStyles(theme => ({
  root: {
  },
  headerTextOne: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#101424',
    // padding: theme.spacing(1, 0),
  },
  headerTextTwo: {
    fontSize: 15,
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
    height: 40,
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
}));


const AccountDetails = (props) => {
  const classes = useStyles();

  const [value, setValue] = React.useState({
    country: '',
    city: '',
    balance: ''
  });

  const handleChange = name => e => {
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  const handleContinue = () => {
    const { setTransferRoute } = props;
    setTransferRoute("transferConfirmation");
  };

  return (
    <div className={classes.root}>
        <div>

        </div>
        <Container maxWidth="sm">
          <Typography className={classes.headerTextOne}>Internal  Transfer Church Fund</Typography>
          <Card className={classes.card}>
            <Typography className={classes.headerTextTwo}> Set Account Details </Typography>
            <CardContent>
              <Grid container spacing={1} justify='center' align='center'>
                <Grid item  xs={12} >
                  <TextField
                    id="outlined-select-state"
                    select
                    label="Overall Wallet Balance"
                    value={value.state}
                    onChange={handleChange}
                    className={classes.textField}
                    variant="outlined"
                    >
                    {balance.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item  xs={12} >
                  <TextField
                    id="outlined-select-state"
                    select
                    label="Select Church Beneficiary"
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
                    label="Church Country"
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
                    placeholder="Amount"
                    fullWidth
                    variant="outlined"
                    type="number"
                    className={classes.textField}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} >
                  <Button className={classes.button} onClick={handleContinue}>
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(AccountDetails);
