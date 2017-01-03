// @flow
import React, { Component } from 'react';
import JubilationChart from '../jubilation-chart';
import JubilationScatter from '../jubilation-scatter';
import JubilationTheme from '../jubilation-theme';
import { XAxis, YAxis } from '../jubilation-axis';

function randomPoints() {
  return [...Array(10)].map(() => ({ x: Math.random() * 600, y: Math.random() * 300 }))
}

class AxisExample extends Component {
  state = {
    points: randomPoints(),
    colors: [0, 1],
  }

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.updateNumX = this.updateNumX.bind(this);
    this.updateNumY = this.updateNumY.bind(this);
    this.state = {
      showX: true,
      numXTicks: 2,
      extendXTicks: true,
      showY: true,
      numYTicks: 2,
      extendYTicks: true,
      points: randomPoints(),
    };
  }

  toggle(axis) {
    this.setState({
      [axis]: !this.state[axis]
    })
  }

  updateNumX(event) {
    this.setState({
      numXTicks: event.target.value
    })
  }

  updateNumY(event) {
    this.setState({
      numYTicks: event.target.value
    })
  }

  render() {
    const { showX, numXTicks, extendXTicks, showY, numYTicks, extendYTicks } = this.state;

    return <div>
      <form>
        <div>
          <label>
            Show X Axis
            <input type="checkbox" checked={showX} value={showX} onChange={() => this.toggle('showX')} />
          </label>
          <label>
            Number of X Ticks
            <input type="number" value={numXTicks} onChange={this.updateNumX} />
          </label>
          <label>
            Extend X Ticks
            <input type="checkbox" checked={extendXTicks} value={extendXTicks} onChange={() => this.toggle('extendXTicks')}/>
          </label>
        </div>
        <div>
          <label>
            Show Y Axis
            <input type="checkbox" checked={showY} value={showY} onChange={() => this.toggle('showY')} />
          </label>
          <label>
            Number of Y Ticks
            <input type="number" value={numYTicks} onChange={this.updateNumY} />
          </label>
          <label>
            Extend Y Ticks
            <input type="checkbox" checked={extendYTicks} value={extendYTicks} onChange={() => this.toggle('extendYTicks')}/>
          </label>
        </div>
      </form>
      <JubilationChart height={300} width={600}>
        <JubilationScatter data={this.state.points} />
        {showX && <XAxis numTicks={numXTicks} extendTicks={extendXTicks} title="X axis" /> }
        {showY && <YAxis numTicks={numYTicks} extendTicks={extendYTicks} title="Y axis" /> }
      </JubilationChart>
    </div>
  }
}

export default AxisExample;
