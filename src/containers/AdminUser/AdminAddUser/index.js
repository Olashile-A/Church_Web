import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import { useRouter } from 'next/router';
import { Divider } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';


const count = [
    {
        value: '5',
        label: '5',
    },
    {
        value: '10',
        label: '10',
    },
    {
        value: '20',
        label: '20',
    },
    {
        value: '25',
        label: '25',
    },
];


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 5)
  },
  headerAddText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#101424',
    padding: theme.spacing(2),
    borderBottom: '1px solid #E2E2E2',
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#101424',
    padding: theme.spacing(2,0,1,2),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 3, 2, 1 ),
    borderBottom: '1px solid grey',
    background: '#FCFCFC 0% 0% no-repeat padding-box'
  },
  body: {
    padding: theme.spacing(3)
  },
  bodyTwo: {
    padding: theme.spacing(2)
  },
  buttonContainer: {
    padding: theme.spacing(3,2)
  },
  button: {
    width: 165,
    height: 40,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 6,
    color: '#FFFFFF',
    fontSize: 10,
    border: '1px solid #D9D9D9',
  }
}));



const AdminAddUser = () => {
  const classes = useStyles();
  const router = useRouter();
  const [drop, setDrop] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState({
    pastorPlanner: false,
    eventPlanner: false,
    pushNotification: false,
    podcast: false,
    prayerRequest: false,
    wallet: false,
    chatRoom: false,
    liveStream: false,
    user: false,
    admin: false,
  });

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.checked });
  };

//   const handleAddNewStaff = () => {
//     router.push('/dashboard/admin-user/admin-add-staff')
//   }

  const handleBack = () => {
    router.push('/dashboard/admin-user')
  };



  return (
    <Container maxWidth="md" className={classes.root}>
        <Button className={classes.backButton} onClick={handleBack} startIcon={<ArrowBackIcon />}>
            Back
        </Button>
      <Paper >
        <Typography className={classes.headerAddText}>Add new Admin</Typography>
        <div className={classes.body}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    id="outlined-select-state"
                    label="First Name"
                    // onChange={handleChange}
                    fullWidth
                    className={classes.textField}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    id="outlined-select-state"
                    fullWidth
                    label="Last Name"
                    // onChange={handleChange}
                    className={classes.textField}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    id="outlined-select-state"
                    fullWidth
                    label="Mobile Number"
                    // onChange={handleChange}
                    className={classes.textField}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    id="outlined-select-state"
                    fullWidth
                    label="email Address"
                    type="email"
                    // onChange={handleChange}
                    className={classes.textField}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    id="outlined-select-state"
                    fullWidth
                    label="Password"
                    type="password"
                    // onChange={handleChange}
                    className={classes.textField}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    id="outlined-select-state"
                    fullWidth
                    label="Role"
                    // onChange={handleChange}
                    className={classes.textField}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    id="outlined-select-state"
                    fullWidth
                    type="date"
                    label="Start Date"
                    // onChange={handleChange}
                    className={classes.textField}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    id="outlined-select-state"
                    fullWidth
                    type="Access End Date"
                    label="Date (to)"
                    // onChange={handleChange}
                    className={classes.textField}
                    variant="outlined"
                    />
                </Grid>
            </Grid>
        </div>
        <Divider />
        <Typography className={classes.headerText}> Role Define</Typography>
        <div className={classes.bodyTwo}>
        <FormGroup row>
            <FormControlLabel
                control={<Checkbox color="primary" checked={value.pastorPlanner} 
                onChange={handleChange} 
                name="pastorPlanner" 
                />}
                label="Pastor planner"
                labelPlacement="end"
            />
            <FormControlLabel
                control={
                <Checkbox
                    color="primary"
                    checked={value.eventPlanner}
                    onChange={handleChange}
                    name="eventPlanner"
                    
                />
                }
                label="Event Planner"
                labelPlacement="end"
            />
            <FormControlLabel 
                control={
                <Checkbox 
                    checked={value.pushNotification}
                    onChange={handleChange}
                    name="pushNotification" 
                    color="primary"
                />
                } 
                label="Push Notification" 
                labelPlacement="end"

            />
            <FormControlLabel 
                control={
                <Checkbox 
                    checked={value.podcast}
                    onChange={handleChange}
                    name="podcast" 
                    color="primary"
                />
                } 
                label="Podcast" 
                labelPlacement="end"

            />
            <FormControlLabel
                control={
                <Checkbox 
                    checked={value.prayerRequest}
                    onChange={handleChange}
                    name="prayerRequest" 
                    color="primary"
                />
                } 
                label="Prayer Request" 
                labelPlacement="end"

            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={value.wallet}
                    onChange={handleChange}
                    name="wallet"
                    color="primary"
                />
                }
                label="Wallet"
                labelPlacement="end"
            />
            <FormControlLabel
                control={
                    <Checkbox 
                        checked={value.chatRoom} 
                        onChange={handleChange} 
                        name="chatRoom" 
                        color="primary"
                    />}
                label="ChatRoom"
                labelPlacement="end"
            />
            <FormControlLabel
                control={
                    <Checkbox
                    checked={value.liveStream} 
                    onChange={handleChange}   
                    name="liveStream" 
                    color="primary"
                />}
                label="LiveStream"
                labelPlacement="end"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={value.user} 
                    onChange={handleChange}
                    name="user"
                    color="primary"
                />
                }
                label="User"
                labelPlacement="end"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={value.admin} 
                    onChange={handleChange}
                    name="admin"
                    color="primary"
                />
                }
                label="Admin"
                labelPlacement="end"
            />
            </FormGroup>

        </div>
        <Typography className={classes.headerText}> Permision</Typography>
        <div>
            <FormControl component="fieldset" className={classes.switch}>
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="Activate"
                    labelPlacement="start"
                    />
                </FormGroup>
            </FormControl>
        </div>
        <div className={classes.buttonContainer}>
            <Button className={classes.button}>
                Create Button
            </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default AdminAddUser;
