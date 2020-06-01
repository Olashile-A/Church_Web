import React from 'react';
import {fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography, Divider, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const count = [
    {
      value: 'null',
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
  root: {
    height: 790
  },
  root2: {
    width: '100%',
    height: 720
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
    padding: theme.spacing(0, 1, 3, 3 ),
  },
  text: {
    textAlign: 'left',
    font: 14,
    fontWeight: 'bold',
    color: '#101424',
    paddingLeft: theme.spacing(3)
  },
  textField: {
    width: '100%',
    height: 40,
    margin: 5
  },
  textFieldM: {
    width: '100%',
    margin: 5
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
  icon: {
    width:  20,
    height: 20,
    color: '#E2E2E2'
    // marginLeft: theme.spacing(3)
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

export default function ResponsiveDialog(props) {
  const classes = useStyles();
  const {open, setOpen, handleClose} = props;

//   const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = React.useState({
    firstName: "",
    lastName: "",
    title: "",
  });
  const [alert, setAlert] = React.useState({
    err: "",
    msg: "",
  });
  const [loading, setLoading] = React.useState(false);

  const docs = { img: "/static/images/dove.png" };


  const handleChange = name => e => {
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  // const handleClose = () => {
  //   setOpen(!isOpen);
  // };

  const handleCreateEvent = (event) => {
    event.preventDefault();

    if (value.firstName) {
      setAlert({
        err: "firstName",
        msg: "firstName can't be empty",
      });
      return;
    }

    if (value.lastName === "") {
      setAlert({
        err: "lastName",
        msg: "lastName can't be empty",
      });
      return;
    }

    if (value.title === "") {
        setAlert({
          err: "title",
          msg: "title can't be empty",
        });
        return;
    }
  };

  return (
    <div>
      <Dialog
        className={classes.root}
        // fullScreen={fullScreen}
        open={open}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" >
          <div className={classes.header}>
          <Typography className={classes.text}> Create Event</Typography>
          <CancelOutlinedIcon className={classes.icon} />
          </div>
        </DialogTitle>
        <Divider />
        <DialogContent className={classes.root2}>
          <DialogContentText>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="Event title"
                    fullWidth
                    variant="outlined"
                    autoComplete="fname"
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                  <FormControl variant="outlined" className={classes.textField}>
                      <InputLabel htmlFor="outlined-age-simple">
                      {" "}
                      Event Category{" "}
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
                          {count.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                              {option.label}
                              </MenuItem>
                          ))}
                      </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="address2"
                    name="address2"
                    label="Date(from)" 
                    fullWidth
                    type="date"
                    variant="outlined"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="Date(to)"
                    type="date"
                    fullWidth
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField 
                    id="state" 
                    name="state" 
                    label="Enter Menu(Address)" 
                    fullWidth 
                    className={classes.textField}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Enter Description"
                  fullWidth
                  multiline
                  rows={3}
                  variant="outlined"
                  className={classes.textFieldM}
                />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Published date"
                    fullWidth
                    variant="outlined"
                    className={classes.textField}
                  />
                </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.buttonContainer}>
          <Button className={classes.buttonOne} onClick={handleCreateEvent} autoFocus>
            Create Event
          </Button>
          <Button className={classes.buttonTwo} onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
