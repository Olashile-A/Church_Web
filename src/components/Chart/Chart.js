import React from "react";
import { Bar } from "react-chartjs-2";
import axios from 'axios';
import { endpoint } from '../../../endpoint';
import { config } from '../../../config';

const count = [
  {
    value: 1,
    label: 'jan'
  },
  {
    value: 2,
    label: 'feb'
  },
  {
    value: 3,
    label: 'mar'
  },
  {
    value: 4,
    label: 'apr'
  },
  {
    value: 5,
    label: 'may'
  },
  {
    value: 6,
    label: 'jun'
  },
  {
    value: 7,
    label: 'jul'
  },
  {
    value: 8,
    label: 'aug'
  },
  {
    value: 9,
    label: 'sep'
  },
  {
    value: 10,
    label: 'oct'
  },
  {
    value: 11,
    label: 'nov'
  },
  {
    value: 12,
    label: 'dec'
  },
]

export default class BarChart extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      chartData: props.chartData
    };
  }

  async componentDidMount(){
    let token = sessionStorage.getItem('token')
      
    if (token) {
      try {
        let headers = {
          'publicToken' : config.publicToken,
          'x-auth-token': token
        }
        let year = await axios.get(endpoint.getTransactionActivityYear, 
          {"headers" : headers}
        )
        console.log('year', year);
        let years = year.data
        var labels = years.map(function(e) {
          return e._id;
        });
        var counts = count.map(function(e) {
          return e.label;
        });
        // for (let i = 0; i < labels.length; i++) {
        //   for(let j = 0; j < counts.length; j++) {
        //     if(labels[i] === counts[j].value){
        //       labels[i] = counts[j].value
        //       var oneCount = counts[j].label
        //       console.log('oneCount', counts);
        //       return counts
        //     }else{
        //       var oneCount = counts[j].label
        //       console.log('onecounts', oneCount);
        //     }
        //   }
        // }
        var data = years.map(function(e) {
            return e.total;
        });
        console.log(labels,data);
        console.log('counts',counts);

        this.setState({
          chartData: {
            labels: counts,
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(253, 14, 49)",
                //stack: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: data,
              },
    
              {
                label: "My second dataset",
                backgroundColor: "rgba(254, 152, 167)",
                //stack: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(253, 14, 49,1)",
                data: data,
              },
    
              {
                label: "My third dataset",
                backgroundColor: "rgba(255, 227, 231)",
                //stack: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(254, 152, 167,1)",
                data: data
              }
            ]
          }
        })
      } catch (error) {
        console.log('error', error);
        console.log('error', error.response);
      }
    }
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
            data={this.state.chartData}
            width={null}
            options={options}
        />
      </div>
     
    );
  }
}

