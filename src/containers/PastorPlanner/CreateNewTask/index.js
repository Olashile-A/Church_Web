import React, {Component, useEffect} from 'react';
import { fade, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper, IconButton,MenuItem } from '@material-ui/core';
import Add from "@material-ui/icons/AddCircleOutline";
import MultipleForm from '../MultipleForm'
import TextField from '@material-ui/core/TextField';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from 'next/router';
import moment from 'moment'
import Notes from './Notes'
import { endpoint } from '../../../../endpoint';
import { config } from '../../../../config';
import axios from 'axios';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Alert from '@material-ui/lab/Alert';

const useStyles = theme => ({
  root: {
    padding: theme.spacing(4, 2),
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    border: 0

  },
  badgeText: {
    fontSize: 15,
    fontWeight: 'regular',
    color: '#FD0E31',
    opacity: 1,
    borderRadius: 9
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    // padding: 4,
  },
  weekContainer: {
    marginLeft: 16,
    background: 'rgba(253, 14, 49, 0.31)',
    height: 30,
    width: 70,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  warn: {
    marginLeft: 16,
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
    width: '20%',
    height: '10%',
    // margin: '9px 0px'
  },
  note: {
    border: '1px solid #c4c4c4',
    height: 55,
    width: '15%',
    display: 'flex',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 5
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 8
  },
  textFields: {
    marginRight: 8,
    width: '20%'
  },
  // textFieldM: {
  //   marginRight: 8,
  //   width: '40%',
  // },
  textFieldM: {
    marginRight: 8,
    width: '40%',
    // borderLeft: '1px solid #FD0E31'
  },
  input2: {
    borderLeft: '2px solid #FD0E31'
  },
  eventIcon: {
    color: '#FD0E31'
  },
  card: {
    height: 550,
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
    padding: theme.spacing(1)
  },
  buttonContainer: {
    padding: theme.spacing(3, 1)
  },
  continueButton: {
    margin: '8px 10px',
    width: 150,
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
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  input: {
    height: 30
  }
});

const taskStatus = [
  {
    value: 1,
    label: 'pending'
  }
]

class CreateNewTask extends Component {
  state = {
    description: "",
    status: "",
    startDate: "",
    dueDate: "",
    endDate: "",
    assigned: "",
    note: "",
    timeline: "",
    err: "",
    msg: "",
    open: false,
    allStaffs: []
  }

  async componentDidMount() {
    let token = sessionStorage.getItem('token');
      
    if (token) {
      try {
        let headers = {
          'publicToken' : config.publicToken,
          'x-auth-token': token
        }
        let staff = await axios.get(endpoint.getStaff, 
          {"headers" : headers}
        )
        console.log('staff', staff);
        this.setState({
          allStaffs: staff.data
        })
      } catch (error) {
        console.log('error', error);
        console.log('error', error.response);
      }
    }
  }



  handleAdd = async () => {
    const {
      description,
      status,
      startDate,
      dueDate,
      assigned,
      note,
      endDate,
    } = this.state
    // e.preventDefault();
  
      
    let token = sessionStorage.getItem('token')
      
    if (token) {
      try {
        
        if (description === "") {
          this.setState({
            err: "description",
            msg: "description cant be empty"
          });
          return;
        }

        if (status === "") {
          this.setState({
            err: "status",
            msg: "status cant be empty"
          });
          return;
        }

        if (assigned === "") {
          this.setState({
            err: "assigned",
            msg: "assigned cant be empty"
          });
          return;
        }

        const request ={
          name: description,
          status: status,
          dueDate: moment(dueDate).format('yyyy-MM-DD'),
          startDate: moment(startDate).format('yyyy-MM-DD'),
          endDate: moment(endDate).format('yyyy-MM-DD'),
          notes: note,
          staffId: assigned

        }
        console.log('request', request);
        
        let headers = {
          'publicToken' : config.publicToken,
          'x-auth-token': token,
        }
        let user = await axios.post(endpoint.createTask, request,
          {"headers" : headers}
        );
        console.log('user', user);

      }catch(error) {
        console.log('error', error);
        this.setState({
          err: "others",
          msg: error.response.data
        })
        console.log('error', error.response);
      }
    }
  
  };

  handleNote = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleChange = value => e => {
    this.setState({
      [value]: e.target.value,
    });
  };

  handleChanges = value => e => {
    this.setState({
      [value]: e.target.value,
    });
  };

  handleModalContinue = note => {
    this.setState({
      note: note,
      open: false
    })
    console.log('states', this.state);
    
    // handleClose()
  };

  render() {
    const {classes} = this.props;
    const {
      description,
      status,
      startDate,
      dueDate,
      assigned,
      note,
      endDate,
      allStaffs,
      open,
      err,
      msg
    } = this.state

    const dates = {
      someDate: new Date().toISOString().substring(0, 10)
    };

    console.log('state', this.state);
    

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.dateContainer}>
          <TextField
            variant="outlined"
            required
            // fullWidth
            id="start_date"
            type="date"
            defaultValue={dates.someDate}
            onChange={this.handleChange("startDate")}
            name="start_date"
            className={classes.textField}
            InputProps={{
                className: classes.input,
            }}
          />
          <div className={classes.weekContainer}>
            <Typography className={classes.badgeText}>week 18</Typography>
          </div>
          <div className={classes.warn}>
            {err && <Alert severity='warning'>{msg}</Alert>}
          </div>
        </div>
        <div className={classes.iconContainer}>
          <IconButton
            variant="outlined"
            size="large"
            color="primary"
            onClick={this.handleAdd}
          >
              <Add />
          </IconButton>
        </div>
          <div className={classes.bodyContainer}>
            <TextField
              variant="outlined"
              required
              // fullWidth
              id="description"
              value={description}
              onChange={this.handleChange("description")}
              label="Description"
              name="description"
              className={classes.textFieldM}
              error={err === "description"}
              helperText={err === "description" && msg}
              InputProps={{
                  className: classes.input2,
              }}
            />
            <TextField
              variant="outlined"
              required
              // fullWidth
              id="status"
              select
              value={status}
              onChange={this.handleChange("status")}
              error={err === "status"}
              helperText={err === "status" && msg}
              label="Status"
              name="status"
              className={classes.textFields}
            >
              {taskStatus.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              variant="outlined"
              required
              // fullWidth
              id="due_date"
              type="date"
              defaultValue={dates.someDate}
              onChange={this.handleChange("dueDate")}
              label="Due Date"
              name="due_date"
              className={classes.textFields}
            />
            <TextField
              variant="outlined"
              required
              // fullWidth
              id="assigned"
              select
              value={assigned}
              onChange={this.handleChange("assigned")}
              label="Assigned"
              name="assigned"
              className={classes.textFields}
              error={err === "assigned"}
              helperText={err === "assigned" && msg}
            >
              {allStaffs.map((option) => (
                <MenuItem key={option._id} value={option._id}>
                {option.firstName}
                </MenuItem>
              ))}
            </TextField>
            <div className={classes.note} onClick={this.handleNote}>
              <EventNoteIcon className={classes.eventIcon}> Note </EventNoteIcon>
            </div>
            <TextField
              variant="outlined"
              required
              // fullWidth
              id="timeline"
              type='date'
              defaultValue={dates.someDate}
              onChange={this.handleChange("endDate")}
              label="Timeline"
              name="timeline"
              className={classes.textField}
            />
          </div>

        </div>
        <Notes 
          open={open}
          handleClose={this.handleClose}
          onInputChanged={this.handleChanges}
          handleModalContinue={this.handleModalContinue}
        />
    </div>
  ); 
  }
};

export default withStyles(useStyles)(CreateNewTask);


     