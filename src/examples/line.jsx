// @flow
import React, { Component } from 'react';
import JubilationChart from '../jubilation-chart';
import JubilationLineChart from '../jubilation-line-chart';

declare type FormEvent = {
  target: {
    checked: boolean
  }
};

function getPoints() {
  const points = [];
  for (let i = 0; i < 10; i += 1) {
    points.push({ x: i * 600, y: Math.random() * 300 });
  }
  return points;
}

class LineExample extends Component {
  state = {
    points: getPoints(),
    colors: [0, 1],
    showPoints: true,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        points: getPoints(),
        colors: [Math.round(Math.random() * 3), Math.round(Math.random() * 3)],
      });
    }, 5000);
  }

  updateShowPoints = (event: FormEvent) => {
    this.setState({ showPoints: event.target.checked });
  }

  render() {
    const { showPoints, points } = this.state;

    return (
      <div>
        <h2>Basic Line Chart</h2>
        <label htmlFor="showPoints">Show Data Points
          <input
            id="showPoints"
            type="checkbox"
            checked={showPoints}
            onChange={this.updateShowPoints}
          />
        </label>
        <JubilationChart height={300} width={600}>
          <JubilationLineChart data={points} showPoints={showPoints} />
        </JubilationChart>
      </div>
    );
  }
}

export default LineExample;
