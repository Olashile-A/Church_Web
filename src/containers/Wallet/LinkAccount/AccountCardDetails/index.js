import React, {useEffect} from 'react';
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
import { setLinkRoute, setLinkDetails } from "../../../../store/actions"
import { connect } from 'react-redux';
import Flow from '../../../../components/Flow'
import axios from 'axios';
import { endpoint } from '../../../../../endpoint';
import { config } from '../../../../../config';

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
  setLinkRoute,
  setLinkDetails
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

const AccountCardDetails = (props) => {
  const classes = useStyles();

  const [bank, setBank] = React.useState([])
  const [bankCode, SetBankCode] = React.useState("")

  const [ alert, setAlert ] = React.useState({
    err: "",
    msg: "",
    isLoading: false
  })

  const [value, setValue] = React.useState({
    selectedBank: "",
    accountNumber: "",
    type: 'current',
  });

  useEffect(() => {
    const fetchData = async () => {
      let token = sessionStorage.getItem('token')
      
      if (token) {
        try {
          let headers = {
            'publicToken' : config.publicToken,
            'x-auth-token': token
          }
          let banks = await axios.get(endpoint.getAllBanks, 
            {"headers" : headers}
          )
          console.log('banks', banks);
          setBank(banks.data)
        }catch(error) {
          console.log('error', error);
          console.log('error', error.response);
        }
      }
    }

    fetchData();
  }, [])

  const handleChange = name => e => {
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  const handleLink = () => {
    const { setLinkRoute, setLinkDetails } = props;

    setAlert({
      err: "",
      msg: "",
      isLoading: true
    })
    if (value.selectedBank === "") {
      setAlert({
        err: "selectedBank",
        msg: "bank can't be empty"
      })
      return
    }
    if (value.accountNumber === "") {
      setAlert({
        err: "accountNumber",
        msg: "account Number can't be empty"
      })
      return
    }
    let details = {
      accountNumber: value.accountNumber,
      bankCode: bankCode,
      bankName: value.selectedBank,
      type: value.type,
    }
    setLinkDetails(details)
    setLinkRoute("confirmation");
  };

  const handleSetBankCode = (event, code) => {
    SetBankCode(code)
  }
  console.log('value', value);
  console.log('bankcode', bankCode);
  

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
                    value="current"
                    control={<Radio color="primary" />}
                    label="Current Account"
                    labelPlacement="start"
                  />

                  <FormControlLabel
                    value="saving"
                    control={<Radio color="primary" />}
                    label="Savings Account"
                    labelPlacement="start"
                  />
                  </RadioGroup>
                </FormControl>

              </Grid>
              <Grid item  xs={12} >
                <TextField
                  id="outlined-select-city"
                  select
                  label="Select Bank"
                  value={value.selectedBank}
                  onChange={handleChange('selectedBank')}
                  className={classes.textField}
                  variant="outlined"
                  error={alert.err === "selectedBank"}
                  helperText={alert.err === "selectedBank" && alert.msg}
                  >
                  {bank.map((option) => (
                      <MenuItem key={option.Id} value={option.Name} onClick={(event) => handleSetBankCode(event, option.Code)}>
                      {option.Name}
                      </MenuItem>
                  ))}
                </TextField>
              </Grid> 
              <Grid item  xs={12} >
                <TextField
                  id="outlined-select-city"
                  disabled
                  label="Bank Code"
                  value={bankCode}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid> 
              <Grid item  xs={12} >
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Account Number"
                  fullWidth
                  type="number"
                  variant="outlined"
                  value={value.accountNumber}
                  onChange={handleChange('accountNumber')}
                  className={classes.textField}
                  error={alert.err === "accountNumber"}
                  helperText={alert.err === "accountNumber" && alert.msg}
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
