import React, {Component, useEffect} from 'react';
import { fade, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper, IconButton } from '@material-ui/core';
import Add from "@material-ui/icons/AddCircleOutline";
import MultipleForm from '../MultipleForm'
import TextField from '@material-ui/core/TextField';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from 'next/router';
import { endpoint } from '../../../../endpoint';
import { config } from '../../../../config';
import axios from 'axios';

const useStyles = theme => ({
  root: {
    padding: theme.spacing(4, 2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  input: {
    height: 30
  }
});

class CreateNewTask extends Component {
  state = {
    multiple: [MultipleForm],
    multipleData: [
      {
        description: "",
        status: "",
        date: "",
        assigned: "",
        note: "",
        timeline: "",
      },
    ],
  }


  handleRemove = (index) => {
    const { multiple, multipleData } = this.state;

    multiple.splice(index, 1);
    multipleData.splice(index, 1);

    this.setState({multiple});
  };

  handleValue = (index, key, value) => {
    const { multipleData } = this.state;

    console.log("claaed");

    multipleData[index][key] = value;

    this.setState({multipleData});
  };

  handleAdd = () => {
    const { multiple, multipleData } = this.state;

    if (multiple.length >= 5) return;
    multiple.push(MultipleForm);
    multipleData.push({
      description: "",
      status: "",
      date: "",
      assigned: "",
      note: "",
      timeline: "",
    });

    this.setState({multiple});
  };

  render() {
    const {classes} = this.props;
    const {multiple, multipleData} = this.state;
    
    const forms = multiple.map((Element, index) => {
      return (
        <Element
          key={index}
          total={multiple.length}
          value={multipleData[index]}
          index={index}
          handleValue={this.handleValue}
          handleRemove={this.handleRemove}
        />
      );
    });

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.dateContainer}>
          <TextField
            variant="outlined"
            required
            id="due_date"
            type="date"
            name="due_date"
            className={classes.textField}
            InputProps={{
                className: classes.input,
            }}
          />
          <div className={classes.weekContainer}>
            <Typography className={classes.badgeText}>week 18</Typography>
          </div>
        </div>
        <div className={classes.bodyContainer}>
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

          {forms}

        </div>
      </div>
    </div>
  ); 
  }
};

export default withStyles(useStyles)(CreateNewTask);


     