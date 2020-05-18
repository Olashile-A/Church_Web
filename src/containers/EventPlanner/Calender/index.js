import React from "react";
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

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
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
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
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
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;



// import React from 'react';
// import { makeStyles } from '@material-ui/styles';
// import { Paper, Container } from '@material-ui/core';
// import EventCalendar  from "react-event-calendar";



// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(1)
//   },
 
  
// }));

// const events = [
//   {
//       start: '2015-07-20',
//       end: '2015-07-02',
//       eventClasses: 'optionalEvent',
//       title: 'test event',
//       description: 'This is a test description of an event',
//   },
//   {
//       start: '2015-07-19',
//       end: '2015-07-25',
//       title: 'test event',
//       description: 'This is a test description of an event',
//       data: 'you can add what ever random data you may want to use later',
//   },
// ];

// const Calender = () => {
//   const classes = useStyles();

//   return (
//     <Container maxWidth="lg">
//       <Paper className={classes.root}>
//       <EventCalendar 
//         month={7}
//           year={2015}
//           events={events} 
//           // onEventClick={(target, eventData, day) => console.log(eventData)} 
//         />
//       </Paper>
//     </Container>
//   );
// };

// export default Calender;
