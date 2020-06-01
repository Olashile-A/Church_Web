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
import { Divider, Paper } from "@material-ui/core";


const useStyles = theme => ({ 
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(2)
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(0,2,1,2)
  },
  paper: {
    width: 180,
    height: 100
  }
});
class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  renderHeader() {
    const {classes} = this.props
    const dateFormat = "MMMM yyyy";

    return (
      <div>
        <div className={classes.header}>
          <ChevronLeftIcon onClick={this.prevMonth} />
          <div className="col col-center">
            <span>{format(this.state.currentMonth, dateFormat)}</span>
          </div>
          <ChevronRightIcon  onClick={this.nextMonth} />
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
        <div className={classes.header} key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className={classes.header}>{days}</div>;
  }

  renderCells() {
    const {classes} = this.props
    const { currentMonth, selectedDate } = this.state;
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
            <span className="number">{formattedDate}</span>
            {/* <span className="bg">{formattedDate}</span> */}
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
    return <div className="body">{rows}</div>;
  }

  // onDateClick = day => {
  //   this.setState({
  //     selectedDate: day
  //   });
  // };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1)
    });
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
