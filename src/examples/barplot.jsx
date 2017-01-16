// @flow
import React, { Component } from 'react';
import JubilationChart from '../jubilation-chart';
import HorizontalBarChart from '../jubilation-horizontal-bar';
import VerticalBarChart from '../jubilation-vertical-bar';
import JubilationTheme from '../jubilation-theme';
import { XAxis, YAxis } from '../jubilation-axis';


function getData() {
  const data = [];
  for (let i = 0; i < Math.ceil(Math.random() * 10); i += 1) {
    data.push(Math.random() * 500);
  }
  return data;
}

class BarPlotExample extends Component {
  state = { data: getData(), colors: [0] }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        data: getData(),
        colors: [Math.round(Math.random() * 3)],
      });
    }, 5000);
  }

  renderBasicHorizontal() {
    return (
      <div>
        <h2>Basic Horizontal Bar Plot</h2>
        <JubilationChart height={300} width={600}>
          <HorizontalBarChart
            data={this.state.data}
            labels={this.state.data.map((d, i) => `Label ${i}`)}
          />
        </JubilationChart>
      </div>
    );
  }

  renderHorizontalWithAxes() {
    return (
      <div>
        <h2>With Axis</h2>
        <JubilationChart height={300} width={600}>
          <HorizontalBarChart
            data={this.state.data}
            labels={this.state.data.map((d, i) => `Label ${i}`)}
            color={JubilationTheme.colors[this.state.colors[0]]}
          />
          <XAxis numTicks={2} title="X axis" />
        </JubilationChart>
      </div>
    );
  }

  renderBasicVertical() {
    return (
      <div>
        <h2>Basic Vertical Bar Plot</h2>
        <JubilationChart height={300} width={600}>
          <VerticalBarChart
            data={this.state.data}
            labels={this.state.data.map((d, i) => `Label ${i}`)}
          />
          <YAxis numTicks={2} title="Y axis" />
        </JubilationChart>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderBasicVertical()}
        {this.renderBasicHorizontal()}
        {this.renderHorizontalWithAxes()}
      </div>
    );
  }
}

export default BarPlotExample;
