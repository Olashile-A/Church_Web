import React from 'react';
import {fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography, Divider, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const balance = [
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

const useStyles = makeStyles(theme => ({ 
  root2: {
    width: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(3, 1, 3, 3 ),
  },
  textField: {
    width: '100%',
    height: 40,
    margin: 5
  },
  text: {
    textAlign: 'left',
    font: 14,
    fontWeight: 'bold',
    color: '#101424',
    paddingLeft: theme.spacing(3)
  },
  buttonOne: {
    width: 127,
    height: 36,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 4,
    fontSize: 12,
    color: '#FFFFFF'
  },
  buttonTwo: {
    width: 127,
    height: 36,
    fontSize: 12,
    color: '#FD0E31',
    fontWeight: 'bold',
    '&:hover' : {
      background: 'none',
      border: 0
    }
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(2, 1)
  },
  icon: {
    width:  20,
    height: 20,
    color: '#E2E2E2',
    cursor: 'pointer'
    // marginLeft: theme.spacing(3)
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: '50%'
  },
  changeButton: {
    width: 120,
    height: 30,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #CCCCCC',
    borderRadius: 4,
    fontSize: 10,
    fontWeight: 'regular',
    color: '#101424',
    margin: theme.spacing(2,0,0,2)
  },
  removeButton: {
    width: 120,
    height: 30,
    background: '#EBEBEB 0% 0% no-repeat padding-box',
    border: '1px solid #CCCCCC',
    borderRadius: 4,
    fontSize: 10,
    fontWeight: 'regular',
    color: '#101424',
    margin: theme.spacing(2,0,0,2)
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'black',
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: 'pink',
    },
  },
  cssFocused: {
    borderColor: '#FD0E31'
  },
  notchedOutline: {
    borderColor: '#8D8D8D'
  }
}));

const docs = {
  image: '/static/images/signUp_background.png'
}

export default function ResponsiveDialog(props) {
  const classes = useStyles();
  const {isOpen, setIsopen, handleClose} = props;

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
 
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState({
    state: ''
  });


  const handleChange = name => e => {
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  // const handleClose = () => {
  //   setOpen(!isOpen);
  // };

  return (
    <div>
      <Dialog
        className={classes.root}
        fullScreen={fullScreen}
        open={isOpen}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" >
          <div className={classes.header}>
          <Typography className={classes.text}> Edit Profile</Typography>
          <CancelOutlinedIcon className={classes.icon} onClick={handleClose}/>
          </div>
        </DialogTitle>
        <Divider />
        <DialogContent className={classes.root2}>
          <DialogContentText>
            <div className={classes.body}>
              <img src={docs.image} className={classes.image}/>
              <Button className={classes.changeButton}>
                Change picture
              </Button>
              <Button className={classes.removeButton}>
                Remove picture
              </Button>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-state"
                  type="date"
                  label="Date (to)"
                  fullWidth
                  value={value.state}
                  // onChange={handleChange}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-state"
                  type="date"
                  label="Date (From)"
                  fullWidth
                  value={value.state}
                  // onChange={handleChange}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-select-state"
                  type="date"
                  label="Date (From)"
                  fullWidth
                  value={value.state}
                  // onChange={handleChange}
                  className={classes.textField}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.textField}>
                  <InputLabel htmlFor="outlined-age-simple">
                  {" "}
                  Country{" "}
                  </InputLabel>
                  <Select
                  onChange={handleChange}
                  input={
                    <OutlinedInput
                    labelWidth={120}
                    name="age"
                    id="outlined-age-simple"
                  />
                  }
                  >
                    {balance.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                      {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.textField}>
                  <InputLabel htmlFor="outlined-age-simple">
                  {" "}
                  State{" "}
                  </InputLabel>
                  <Select
                  onChange={handleChange}
                  input={
                    <OutlinedInput
                    labelWidth={120}
                    name="age"
                    id="outlined-age-simple"
                  />
                  }
                  >
                    {balance.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                      {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.textField}>
                  <InputLabel htmlFor="outlined-age-simple">
                  {" "}
                  Church{" "}
                  </InputLabel>
                  <Select
                  onChange={handleChange}
                  input={
                    <OutlinedInput
                    labelWidth={120}
                    name="age"
                    id="outlined-age-simple"
                  />
                  }
                  >
                    {balance.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                      {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.textField}>
                  <InputLabel htmlFor="outlined-age-simple">
                  {" "}
                  Branch{" "}
                  </InputLabel>
                  <Select
                  onChange={handleChange}
                  input={
                    <OutlinedInput
                    labelWidth={120}
                    name="age"
                    id="outlined-age-simple"
                  />
                  }
                  >
                    {balance.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                      {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.buttonContainer}>
          <Button className={classes.buttonOne}  autoFocus>
            Update Profile
          </Button>
          <Button className={classes.buttonTwo} onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
