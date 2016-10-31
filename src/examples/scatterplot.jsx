// @flow
import React, { Component } from 'react';
import JubilationChart from '../jubilation-chart';
import JubilationScatter from '../jubilation-scatter';
import JubilationTheme from '../jubilation-theme';
import { XAxis, YAxis } from '../jubilation-axis';


function getPoints() {
  const points = [];
  for (let i = 0; i < 100; i + 1) {
    points.push({ x: Math.random() * 600, y: Math.random() * 100 });
  }
  return points;
}

class ScatterPlotExample extends Component {
  state = {
    points: getPoints(),
    height: window.innerHeight,
    width: window.innerWidth,
    colors: [0, 1],
  }

  componentDidMount() {
    window.addEventListener('resize', (e) => {
      this.setState({ height: e.target.innerHeight, width: e.target.innerWidth });
    });
    setInterval(() => {
      this.setState({
        points: getPoints(),
        colors: [Math.round(Math.random() * 3), Math.round(Math.random() * 3)],
      });
    }, 2000);
  }

  render() {
    return (
      <JubilationChart height={this.state.height} width={this.state.width}>
        <JubilationScatter
          data={this.state.points}
          color={JubilationTheme.colors[this.state.colors[0]]}
          size={10}
          style={{ opacity: 0.5 }}
        />
        <JubilationScatter data={this.state.points.slice(0, 10)} />
        <XAxis numTicks={1} title="testing" />
        <YAxis max={100} numTicks={2} title="Y axis" />
        <YAxis
          min={Math.random() * 20}
          max={(Math.random() * 20) + 80}
          position={this.state.points[0].x || 0}
          numTicks={3}
          title="WAT"
        />
      </JubilationChart>
    );
  }
}

export default ScatterPlotExample;
