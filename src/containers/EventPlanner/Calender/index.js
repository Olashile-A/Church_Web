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
import EventView from './ViewEvent';

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
    padding: theme.spacing(2),
    cursor: 'pointer',
    '&:hover': {
      background: '#E2E2E2',
      borderRadius: 3
    }
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
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    allEvents: [],
    viewDetails: [],
    open: false
  };

  async componentDidMount() {
    let token = sessionStorage.getItem('token')
    let newMonth = format(this.state.currentMonth, 'M')
    let newYear = format(this.state.currentMonth, 'yyyy')
    if (token) {
      try {
        let headers = {
          'publicToken' : config.publicToken,
          'x-auth-token': token
        }
        let events = await axios.get(endpoint.getEvent + '?month=' + newMonth  + '&year=' + newYear, 
          {"headers" : headers}
        )
        console.log('events', events);
        this.setState({
          allEvents: events.data
        })
      } catch (error) {
        console.log('error', error);
        console.log('error', error.response);
      }
    }
    
    
  }

  handleClose = () => {
    this.setState({
      open: false
    });
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
    const { currentMonth, selectedDate, allEvents } = this.state;
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
          >
            <span className={classes.formattedDate}>{formattedDate}</span>
            <span className="bg">
              {allEvents
                .filter(view => moment(view.startDate).format('D') === formattedDate &&
                moment(view.startDate).format('M') === moment(currentMonth).format('M'))
                .map((tag => (
                  <div className={classes.events} key={tag.i} onClick={this.handleOpen(tag._id)}>
                    <div>{tag.tagString}</div>
                    <div>{tag.title}</div>
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
        let events = await axios.get(endpoint.getEvent + '?month=' + (Number(newMonth) + 1)  + '&year=' + newYear, 
          {"headers" : headers}
        )
        console.log('events', events);
        this.setState({
          allEvents: events.data
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
        let events = await axios.get(endpoint.getEvent + '?month=' + (Number(newMonth) - 1)  + '&year=' + newYear, 
          {"headers" : headers}
        )
        console.log('events', events);
        this.setState({
          allEvents: events.data
        })
      } catch (error) {
        console.log('error', error);
        console.log('error', error.response);
      }
    }
  };

  handleOpen = id => () => {
    const {allEvents} = this.state;

    let data=[]
    allEvents
      .filter((dat) => dat._id === id)
      .map(detail => {
      data.push({ 
        id: detail._id,
        tagString: detail.tagString,
        img: detail.img,
        imgx45: detail.imgx45,
        imgx75: detail.imgx75,
        imgx150: detail.imgx150,
        body: detail.body,
        startDate: detail.startDate
      })
    })

    this.setState({
      viewDetails: data,
      open: true
    });
  }

  render() {
    const {classes} = this.props
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
        <EventView 
          open={this.state.open}
          handleClose={this.handleClose}
          viewDetails={this.state.viewDetails}
        />
      </div>
    );
  }
}

export default withStyles(useStyles)(Calendar);
