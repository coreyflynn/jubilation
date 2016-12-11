// @flow
import React, { Component } from 'react';
import JubilationChart from '../jubilation-chart';
import HorizontalBarChart from '../jubilation-horizontal-bar';
import JubilationTheme from '../jubilation-theme';
import { XAxis, YAxis } from '../jubilation-axis';


function getData() {
  const data = [];
  for (let i = 0; i < Math.ceil(Math.random() * 10); i += 1) {
    data.push(Math.random() * 3000);
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

  renderBasic() {
    return (
      <div>
        <h1>Basic Bar Plot</h1>
        <JubilationChart height={300} width={600}>
          <HorizontalBarChart data={this.state.data} />
        </JubilationChart>
      </div>
    );
  }

  renderWithAxes() {
    return (
      <div>
        <h1>With Axis</h1>
        <JubilationChart height={300} width={600}>
          <HorizontalBarChart
            data={this.state.data}
            color={JubilationTheme.colors[this.state.colors[0]]}
          />
          <XAxis numTicks={2} title="X axis" />
          <YAxis numTicks={2} title="Y axis" />
        </JubilationChart>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderBasic()}
        {this.renderWithAxes()}
      </div>
    );
  }
}

export default BarPlotExample;
