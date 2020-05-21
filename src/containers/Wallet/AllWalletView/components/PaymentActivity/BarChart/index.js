import React from "react";
import { Bar } from "react-chartjs-2";


export default class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(253, 14, 49)",
            //stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40]
          },
        ]
      }
    };
  }

  render() {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      type: "bar",
      scales: {
        xAxes: [{
            barThickness: 10,  // number (pixels) or 'flex'
            maxBarThickness: 8
        }]
    }
    };
    return (
      <div style={{height: 250, padding: 10}}>
        <Bar
            data={this.state.data}
            width={null}
            options={options}
        />
      </div>
     
    );
  }
}

