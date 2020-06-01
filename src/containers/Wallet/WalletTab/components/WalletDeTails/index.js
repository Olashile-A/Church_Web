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
import { setWallet } from "../../../../../store/actions"
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
      label: 'C1234',
    },
    {
      value: '2',
      label: 'C5484',
    },
    {
      value: '3',
      label: 'C589',
    },
];

const mapDispatchToProps ={
  setWallet
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

const WalletDetails = (props) => {
  const classes = useStyles();
  const {country,currency,handleWalletDetailsContinue} = props

  const [value, setValue] = React.useState({
    selectedCountry: "",
    selectedCurrency: "",
    selectedNumber: "",
    name: "",
  });
  const [ alert, setAlert ] = React.useState({
    err: "",
    msg: "",
    isLoading: false
  })

  const handleChange = name => e => {
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  const handleValidate = () => {
    setAlert({
      err: "",
      msg: "",
      isLoading: true
    })
    if (value.selectedCountry === "") {
      setAlert({
        err: "selectedCountry",
        msg: "country can't be empty"
      })
      return
    }
    if (value.selectedCurrency === "") {
      setAlert({
        err: "selectedCurrency",
        msg: "currency can't be empty"
      })
      return
    }
    if (value.selectedNumber === "") {
      setAlert({
        err: "selectedNumber",
        msg: "location can't be empty"
      })
      return
    }
    if (value.name === "") {
      setAlert({
        err: "name",
        msg: "name can't be empty"
      })
      return
    }
    // let details = {
    //   country: value.selectedCountry,
    //   currency: value.selectedCurrency,
    //   number: value.selectedNumber,
    //   name: value.name
    // }
    // setWallet(details)
  };

  return (
    <div className={classes.root}>
     
      <div>
      
      </div>
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <Typography className={classes.headerText}> Link Bank Account </Typography>
          <CardContent>
            <Grid container spacing={1} justify='center'>
              <Grid item  xs={12} >
                <TextField
                  id="outlined-select-state"
                  select
                  label="Select Country"
                  value={value.selectedCountry}
                  onChange={handleChange('selectedCountry')}
                  className={classes.textField}
                  variant="outlined"
                  error={alert.err === "selectedCountry"}
                  helperText={alert.err === "selectedCountry" && alert.msg}
                  >
                  {country.map((option) => (
                      <MenuItem key={option._id} value={option._id}>
                      {option.name}
                      </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item  xs={12} >
                <TextField
                  id="outlined-select-city"
                  select
                  label="Select Bank"
                  value={value.selectedCurrency}
                  onChange={handleChange('selectedCurrency')}
                  className={classes.textField}
                  variant="outlined"
                  error={alert.err === "selectedCurrency"}
                  helperText={alert.err === "selectedCurrency" && alert.msg}
                  >
                  {currency.map((option) => (
                      <MenuItem key={option.value} value={option._id}>
                      {option.name}
                      </MenuItem>
                  ))}
                </TextField>
              </Grid> 
              <Grid item  xs={12} >
                <TextField
                  id="outlined-select-city"
                  select
                  label="Select Church Location(ID number)"
                  value={value.selectedNumber}
                  onChange={handleChange('selectedNumber')}
                  className={classes.textField}
                  variant="outlined"
                  error={alert.err === "selectedNumber"}
                  helperText={alert.err === "selectedNumber" && alert.msg}
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
                  id="walletName"
                  name="walletName"
                  label="Wallet name"
                  fullWidth
                  variant="outlined"
                  autoComplete="fname"
                  className={classes.textField}
                  value={value.name}
                  onChange={handleChange('name')}
                  error={alert.err === "name"}
                  helperText={alert.err === "name" && alert.msg}
                />
              </Grid>
              <Grid item xs={12} >
                <Button className={classes.button} onClick={handleWalletDetailsContinue}>
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

export default connect(null, mapDispatchToProps)(WalletDetails);
