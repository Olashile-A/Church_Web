import React, {useState, useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from 'next/router';
import { endpoint } from '../../../../endpoint';
import { config } from '../../../../config';
import axios from 'axios';

// const country = [
//     {
//       value: 'null',
//       label: 'Select',
//     },
//     {
//       value: '1',
//       label: 'Nigeria',
//     },
//     {
//       value: '2',
//       label: 'America',
//     },
//     {
//       value: '3',
//       label: 'Naija',
//     },
// ];

const state = [
    {
      value: 'null',
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

const city = [
    {
      value: 'null',
      label: 'Select',
    },
    {
      value: '1',
      label: 'Ikeja',
    },
    {
      value: '2',
      label: 'Eko',
    },
    {
      value: '3',
      label: 'Cement',
    },
];



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    border: 0

  },
  container: {
    width: '60vh',
    border: '1px solid grey',
    padding: theme.spacing(3),
  },
  img: {
    width: 53,
    height: 32,
    borderRadius: 4,
  },
  paper: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    padding: theme.spacing(3),
    width: 398,
    height: 78,
    alignItems: 'center'
  },
  textField: {
    width: '100%',
    height: 40,
    margin: '9px 0px'
  },
  card: {
    height: 500,
    width: 456,
    border: '1px solid #E2E2E2',
    borderRadius: 5
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid #E2E2E2',
    padding: theme.spacing(2)
  }, 
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#101424',
    padding: theme.spacing(2)
  },
  buttonContainer: {
    padding: theme.spacing(3, 1)
  },
  continueButton: {
    margin: '8px 10px',
    width: 116,
    height: 36,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 4,
    '&:hover': {
      background: '#FD0E31 0% 0% no-repeat padding-box',
      color: '#EEEEE'
    }
  },
  text: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'regular',
    color: '#000000',
    marginLeft: 16
  },
  cardContent: {
    width: 399,
    height: 399
  },
  backButton:{
    background: 'none 0% 0% no-repeat padding-box',
    borderRadius: 4,
    width:  80,
    height: 36,
    fontSize: 14,
    color: '#101424'
  }
}));

const docs = {
  facebook: '/static/images/facebook.png',
  youtube: '/static/images/youtube.png',
  instagram: '/static/images/instagram.png'
}

const LiveStreamForm = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState({
    selectedCountry: "",
    city: "",
    link: ""
  });
  const [country, setCountry] = React.useState([])
  const [state, setStates] = React.useState([])


  const [alert, setAlert] = React.useState({
    err: "",
    msg: "",
    others: "",
    isLoading: false
  });

  useEffect(() => {
    const fetchData = async () => {
      let token = sessionStorage.getItem('token')
      
      if (token) {
        try {
          let headers = {
            'publicToken' : config.publicToken,
          }
          let countries = await axios.get(endpoint.getCountries, 
            {"headers" : headers}
          )
          console.log('countries', countries);

          setCountry(countries.data)
          
        } catch (error) {
          console.log('error', error);
          console.log('error', error.response);
        }
      }
    }

    fetchData();
  }, [])
  
  const router = useRouter();
  let type = router.query.type  

  const handleChange = name => e => {
    setValue({
      ...value,
      [name]: e.target.value,
    });
    
  };

  const handleChanges = value => event => {
    let countries = event.target.value
    // setCountry(countries);
    setValue({
      selectedCountry: countries
    })
    
    // handlegetState(countries)
  };

  const handlegetState = async(countryId) => {

    let headers = {
      'publicToken' : config.publicToken,
    }
    let states = await axios.get(endpoint.getCountries + '/' + countryId, 
      {"headers" : headers}
    )
    console.log('states', states);

    setStates(states.data)
  }

  const handleConntinue = () => {
    if (value.link === "") {
      setAlert({
        err: "link",
        msg: "Link can't be empty",
      });
      return;
    }

    if (value.country === null) {
      setAlert({
        err: "country",
        msg: "Country can't be empty",
      });
      return;
    }

    if (value.state === null) {
      setAlert({
        err: "state",
        msg: "State can't be empty",
      });
      return;
    }

    if (value.city === null) {
      setAlert({
        err: "city",
        msg: "City can't be empty",
      });
      return;
    } 
  }

  console.log('value', value);
  console.log('country', state);
  

  return (
    <div className={classes.root}>
        
        <Container className={classes.cardGrid} maxWidth="sm">
            <Button className={classes.backButton} startIcon={<ArrowBackIcon />}>
              Back
            </Button>
          <Card className={classes.card}>
            <div className={classes.header}>
              {type === 'Facebook' && <img src={docs.facebook} />}
              {type === 'Youtube' && <img src={docs.youtube} />}
              {type === 'Instagram' && <img src={docs.instagram} />}
              <Typography  className={classes.headerText} >
                {type} Live Stream
              </Typography>
            </div>
            <CardContent>   
              <Grid container spacing={2}>
                <Grid item  xs={12} >
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="URL Link"
                  fullWidth
                  variant="outlined"
                  value={value.link}
                  onChange={handleChange('link')}
                  className={classes.textField}
                  error={alert.err === "link"}
                  helperText={alert.err === "link" && alert.msg}
                />
                </Grid>
                <Grid item  xs={12} >
                <TextField
                  id="outlined-select-country"
                  select
                  label="Select Church Country"
                  placeholder="Select Church Country"
                  value={value.selectedCountry}
                  onChange={handleChanges('selectedCountry')}
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
                    id="outlined-select-state"
                    select
                    label="Select Church State"
                    value={value.selectedState}
                    onChange={handleChange('selectedState')}
                    className={classes.textField}
                    variant="outlined"
                    error={alert.err === "state"}
                    helperText={alert.err === "state" && alert.msg}
                    >
                    {state.map((option) => (
                        <MenuItem key={option.code} value={option.name}>
                        {option.name}
                        </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item  xs={12} >
                  <TextField
                    id="outlined-select-city"
                    select
                    label="Select Church City"
                    value={value.city}
                    onChange={handleChange('city')}
                    className={classes.textField}
                    variant="outlined"
                    error={alert.err === "city"}
                    helperText={alert.err === "city" && alert.msg}
                    >
                    {city.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </CardContent>
              <CardActions className={classes.buttonContainer}>
                <Button size="medium" color="secondary" onClick={handleConntinue} className={classes.continueButton}>
                  Continue Setup
                </Button>
              </CardActions>
              
          </Card>
        </Container>
    </div>
  );
};

export default LiveStreamForm;


     