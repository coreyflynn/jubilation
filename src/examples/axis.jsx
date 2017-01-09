// @flow
import React, { Component } from 'react';
import JubilationChart from '../jubilation-chart';
import JubilationScatter from '../jubilation-scatter';
import { XAxis, YAxis } from '../jubilation-axis';

type State = {
  showX: boolean,
  numXTicks: number,
  extendXTicks: boolean,
  showY: boolean,
  numYTicks: number,
  extendYTicks: boolean,
  points: Object[],
}

function randomPoints() {
  return [...Array(10)].map(() => (
    { x: Math.random() * 600, y: Math.random() * 300 })
  );
}

class AxisExample extends Component {

  state: State
  toggle: Function
  updateNumX: Function
  updateNumY: Function

  constructor(props: Object) {
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

  toggle(axis: string) {
    this.setState({
      [axis]: !this.state[axis],
    });
  }

  updateNumX(event: Object) {
    this.setState({
      numXTicks: event.target.value,
    });
  }

  updateNumY(event: Object) {
    this.setState({
      numYTicks: event.target.value,
    });
  }

  render() {
    const {
      showX,
      numXTicks,
      extendXTicks,
      showY,
      numYTicks,
      extendYTicks,
    } = this.state;

    return (
      <div>
        <form>
          <div>
            <label htmlFor="showX">
              Show X Axis
              <input id="showX" type="checkbox" checked={showX} value={showX} onChange={() => this.toggle('showX')} />
            </label>
            <label htmlFor="updateNumX">
              Number of X Ticks
              <input id="updateNumX" type="number" value={numXTicks} onChange={this.updateNumX} />
            </label>
            <label htmlFor="extendXTicks">
              Extend X Ticks
              <input id="extendXTicks" type="checkbox" checked={extendXTicks} value={extendXTicks} onChange={() => this.toggle('extendXTicks')} />
            </label>
          </div>
          <div>
            <label htmlFor="showY">
              Show Y Axis
              <input id="showY" type="checkbox" checked={showY} value={showY} onChange={() => this.toggle('showY')} />
            </label>
            <label htmlFor="updateNumY">
              Number of Y Ticks
              <input id="updateNumY" type="number" value={numYTicks} onChange={this.updateNumY} />
            </label>
            <label htmlFor="extendYTicks">
              Extend Y Ticks
              <input id="extendYTicks" type="checkbox" checked={extendYTicks} value={extendYTicks} onChange={() => this.toggle('extendYTicks')} />
            </label>
          </div>
        </form>
        <JubilationChart height={300} width={600}>
          <JubilationScatter data={this.state.points} />
          {<XAxis numTicks={numXTicks} extendTicks={extendXTicks} title="X axis" axisLine={showX} />}
          {<YAxis numTicks={numYTicks} extendTicks={extendYTicks} title="Y axis" axisLine={showY} />}
        </JubilationChart>
      </div>
    );
  }
}

export default AxisExample;
