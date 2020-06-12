import React from "react";
import {fade, withStyles } from '@material-ui/core/styles';
import {
  startOfWeek,
  addDays,
  format,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  parse,
  addMonths,
  subMonths
} from "date-fns";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Divider, Paper, Typography } from "@material-ui/core";
import moment from 'moment'
import axios from 'axios';
import {endpoint} from '../../../../endpoint';
import {config} from '../../../../config';

const useStyles = theme => ({ 
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(1,8)
  },
  headerTwo: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: theme.spacing(0,2)
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(0,0,1,0)
  },
  paper: {
    width: 180,
    height: 100,
    marginLeft: 8,
    marginRight: 8
  },
  formattedDate: {
    padding: '5px 5px 0px'
  },
  events: {
    padding: theme.spacing(1)
  },
  chevy: {
    cursor: 'pointer',
    '&:hover': {
      background: '#E2E2E2',
      borderRadius: 3
    }
  }
});

const dayOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      allTasks: []
    };
 }

  componentDidUpdate = (prevProps) => {
    const {tasks} = this.props
    if (tasks != prevProps.tasks) {
      this.setState({
        allTasks: tasks
      })
    } 
  }

  renderHeader() {
    const {classes} = this.props
    const dateFormat = "MMMM yyyy";

    return (
      <div>
        <div className={classes.header}>
          <div onClick={this.prevMonth} className={classes.chevy}>
            <ChevronLeftIcon />
          </div>
          <div className="col col-center">
            <span>{format(this.state.currentMonth, dateFormat)}</span>
          </div>
          <div onClick={this.nextMonth} className={classes.chevy}>
            <ChevronRightIcon  />
          </div>
        </div>
        <Divider />
      </div>
     
    );
  }

  renderDays() {
    const {classes} = this.props
    const dateFormat = "dddd";
    const days = [];

    let startDate = startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className={classes.headerTwo} key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className={classes.header}>
      {dayOfTheWeek.map(day =>(
        <div key={day.i}>
        <Typography>{day}</Typography>
        </div>
      ))}
    </div>;
  }

  renderCells() {
    const {classes} = this.props
    
    const { currentMonth, selectedDate, allTasks } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <Paper
            className={classes.paper}
            // className={`col cell ${
            //   !isSameMonth(day, monthStart)
            //     ? "disabled"
            //     : isSameDay(day, selectedDate) ? "selected" : ""
            // }`}
            key={day}
            // onClick={() => this.onDateClick(parse(cloneDay))}
          >
            <span className={classes.formattedDate}>{formattedDate}</span>
            <span className="bg">
              {allTasks
                .filter(view => moment(view.startDate).format('D') === formattedDate && 
                moment(view.startDate).format('M') === moment(currentMonth).format('M'))
                .map((tag => (
                  <div className={classes.events} key={tag.i}>
                    <div>{tag.name}</div>
                    <div>{tag.status}</div>
                  </div>
              )))}
            </span>
          </Paper>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className={classes.body} key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div >{rows}</div>;
  }

  // onDateClick = day => {
  //   this.setState({
  //     selectedDate: day
  //   });
  // };

  nextMonth = async() => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    });
    console.log('nextstate', this.state.currentMonth);

    let token = sessionStorage.getItem('token')
    let newMonth = format(this.state.currentMonth, 'M')
    console.log('newmoth', newMonth);
    
    let newYear = format(this.state.currentMonth, 'yyyy')
    if (token) {
      try {
        let headers = {
          'publicToken' : config.publicToken,
          'x-auth-token': token
        }
        let task = await axios.get(endpoint.getTask + '?month=' + (Number(newMonth) + 1)  + '&year=' + newYear, 
          {"headers" : headers}
        )
        console.log('events', task);
        this.setState({
          allTasks: task.data
        })
      } catch (error) {
        console.log('error', error);
        console.log('error', error.response);
      }
    }
  };

  prevMonth = async() => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1)
    });
    console.log('prestate', this.state.currentMonth);
    

    let token = sessionStorage.getItem('token')
    let newMonth = format(this.state.currentMonth, 'M')
    console.log('newmoth2', newMonth);
    
    let newYear = format(this.state.currentMonth, 'yyyy')
    if (token) {
      try {
        let headers = {
          'publicToken' : config.publicToken,
          'x-auth-token': token
        }
        let task = await axios.get(endpoint.getTask + '?month=' + (Number(newMonth) - 1)  + '&year=' + newYear, 
          {"headers" : headers}
        )
        console.log('task', task);
        this.setState({
          allTasks: task.data
        })
      } catch (error) {
        console.log('error', error);
        console.log('error', error.response);
      }
    }
  };

  render() {
    const {classes} = this.props
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default withStyles(useStyles)(Calendar);
