// @flow
import React, { Component } from 'react';
import JubilationChart from '../jubilation-chart';
import JubilationScatter from '../jubilation-scatter';
import JubilationTheme from '../jubilation-theme';
import { XAxis, YAxis } from '../jubilation-axis';


function getPoints() {
  const points = [];
  for (let i = 0; i < 10; i += 1) {
    points.push({ x: Math.random() * 600, y: Math.random() * 300 });
  }
  return points;
}

class ScatterPlotExample extends Component {
  state = {
    points: getPoints(),
    colors: [0, 1],
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        points: getPoints(),
        colors: [Math.round(Math.random() * 3), Math.round(Math.random() * 3)],
      });
    }, 5000);
  }

  renderBasic() {
    return (
      <div>
        <h1>Basic Scatter Plot</h1>
        <JubilationChart height={300} width={600}>
          <JubilationScatter data={this.state.points} />
        </JubilationChart>
      </div>
    );
  }

  renderWithAxes() {
    return (
      <div>
        <h1>With Axes</h1>
        <JubilationChart height={300} width={600}>
          <JubilationScatter data={this.state.points} />
          <XAxis numTicks={2} title="X axis" />
          <YAxis numTicks={2} title="Y axis" />
        </JubilationChart>
      </div>
    );
  }

  renderCustomPoints() {
    return (
      <div>
        <h1>Custom Points</h1>
        <JubilationChart height={300} width={600}>
          <JubilationScatter
            data={this.state.points}
            color={'red'}
            size={10}
            style={{ opacity: 0.5 }}
          />
          <XAxis numTicks={2} title="X axis" />
          <YAxis numTicks={2} title="Y axis" />
        </JubilationChart>
      </div>
    );
  }

  renderColorTrans() {
    return (
      <div>
        <h1>Color Transitions</h1>
        <JubilationChart height={300} width={600}>
          <JubilationScatter
            data={this.state.points}
            color={JubilationTheme.colors[this.state.colors[0]]}
            size={10}
            style={{ opacity: 0.5 }}
          />
          <XAxis numTicks={2} title="X axis" />
          <YAxis numTicks={2} title="Y axis" />
        </JubilationChart>
      </div>
    );
  }

  renderMultiple() {
    return (
      <div>
        <h1>Multiple Series</h1>
        <JubilationChart height={300} width={600}>
          <JubilationScatter
            data={getPoints()}
            color={JubilationTheme.colors[0]}
            size={10}
            style={{ opacity: 0.5 }}
          />
          <JubilationScatter
            data={this.state.points}
            color={JubilationTheme.colors[1]}
            size={10}
            style={{ opacity: 0.5 }}
          />
          <XAxis numTicks={2} title="X axis" />
          <YAxis numTicks={2} title="Y axis" />
        </JubilationChart>
      </div>
    );
  }

  renderMultipleAxes() {
    return (
      <div>
        <h1>Multiple Axes</h1>
        <JubilationChart height={300} width={600}>
          <JubilationScatter
            data={this.state.points}
            style={{ opacity: 0.25 }}
            color={JubilationTheme.colors[1]}
          />
          <XAxis numTicks={1} title="X axis" />
          <YAxis numTicks={2} title="Y axis" />
          <YAxis
            position={300}
            numTicks={3}
            title="Second Y axis"
          />
          <XAxis
            position={150}
            numTicks={3}
            title="Second X axis"
          />
        </JubilationChart>
      </div>
    );
  }
  
  render() {
    return (
      <div>
        {this.renderBasic()}
        {this.renderWithAxes()}
        {this.renderCustomPoints()}
        {this.renderColorTrans()}
        {this.renderMultiple()}
        {this.renderMultipleAxes()}
      </div>
    );
  }
}

export default ScatterPlotExample;
