// @flow
import React, { Component } from 'react';
import JubilationChart from '../jubilation-chart';
import JubilationRect from '../jubilation-rect';


function getData() {
  const data = [];
  for (let i = 0; i < 10; i += 1) {
    data.push((i * 30) + 1);
  }
  return data;
}

class BarPlotExample extends Component {
  state = { data: getData() }

  componentDidMount() {
    setInterval(() => {
      this.setState({ data: getData() });
    }, 5000);
  }

  renderBasic() {
    return (
      <div>
        <h1>Basic Bar Plot</h1>
        <JubilationChart height={300} width={600}>
          {
            this.state.data.map((datum, i) =>
              <JubilationRect x={0} y={i * 10} width={datum} height={5} />
            )
          }
        </JubilationChart>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderBasic()}
      </div>
    );
  }
}

export default BarPlotExample;
