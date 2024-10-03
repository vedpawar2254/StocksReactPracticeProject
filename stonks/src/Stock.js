import React from "react";
// import Plot from "react-plotly.js";
import Plotly from "plotly.js-basic-dist";

import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

<head>
  <script src="https://cdn.plot.ly/plotly-2.14.0.min.js"></script>
</head>;

class Stock extends React.Component {
  //     constructor() {
  //     super();
  //     this.fetchApi= this.fetchApi.bind(this);
  //   }

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       stockChartXValues: [],
  //       stockChartYValues: [],
  //     };
  //     //this.handleClick = this.handleClick.bind(this);
  //   }
  constructor(props) {
    super(props);
    this.state = { stockChartXValues: [], stockChartYValues: [] };
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi() {
    const pointerToThis = this;
    const API_KEY = "RIMOPGCQKMLE29BR";
    let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_CALL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        for (var key in data["Time Series(Daily"]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series(Daily"][key]["1. open"]
          );
        }
        console.log(this.state.stockChartXValues);

        //     handleClick(e) {
        //         this.setState({value:e.target.value}, () => {
        //   console.log(this.state.value); // Updated value here
        // });}
        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction,
        });
      });
  }

  render() {
    console.log(this.state.stockChartXValues);
    return (
      <div>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: "scatter",
              mode: "lines+markers",
              //   marker: { color: "red" },
            },
          ]}
          layout={{ width: 720, height: 440, title: "A Fancy Plot" }}
        />
      </div>
    );
  }
}

export default Stock;

//RIMOPGCQKMLE29BR
