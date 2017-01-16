// @flow
import React, { Component } from 'react';
import JubilationChart from '../jubilation-chart';
import JubilationScatter from '../jubilation-scatter';
import { XAxis, YAxis } from '../jubilation-axis';

type State = {
  showX: boolean,
  showY: boolean,
  numXTicks: number,
  numYTicks: number,
  tickTypeX: TickType,
  tickTypeY: TickType,
  points: Object[],
}

type FormEvent = {
  target: {
    value: string
  }
}

function randomPoints() {
  return [...Array(10)].map(() => (
    { x: Math.random() * 600, y: Math.random() * 300 })
  );
}

function validateTickType(eventType: string): TickType {
  switch (eventType) {
    case 'none':
    case 'short':
    case 'full':
      return eventType;
    default:
      return ('short': TickType);
  }
}

class AxisExample extends Component {

  state: State
  toggle: Function
  updateNumX: Function
  updateNumY: Function
  updateXTicks: Function
  updateYTicks: Function

  constructor(props: Object) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.updateNumX = this.updateNumX.bind(this);
    this.updateNumY = this.updateNumY.bind(this);
    this.updateXTicks = this.updateXTicks.bind(this);
    this.updateYTicks = this.updateYTicks.bind(this);
    this.state = {
      showX: true,
      numXTicks: 2,
      tickTypeX: 'short',
      showY: true,
      numYTicks: 2,
      tickTypeY: 'short',
      points: randomPoints(),
    };
  }

  toggle(axis: string) {
    this.setState({
      [axis]: !this.state[axis],
    });
  }

  updateNumX(event: FormEvent) {
    this.setState({
      numXTicks: parseInt(event.target.value, 10),
    });
  }

  updateXTicks(event: FormEvent) {
    this.setState({
      tickTypeX: validateTickType(event.target.value),
    });
  }

  updateNumY(event: FormEvent) {
    this.setState({
      numYTicks: parseInt(event.target.value, 10),
    });
  }

  updateYTicks(event: FormEvent) {
    this.setState({
      tickTypeY: validateTickType(event.target.value),
    });
  }

  render() {
    const {
      showX,
      showY,
      numXTicks,
      numYTicks,
      tickTypeX,
      tickTypeY,
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
            <label htmlFor="tickTypeX">
              Extend X Ticks
              <select id="tickTypeX" type="checkbox" value={tickTypeX} onChange={this.updateXTicks}>
                <option value="none">none</option>
                <option value="short">short</option>
                <option value="full">full</option>
              </select>
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
              <select id="tickTypeY" type="checkbox" value={tickTypeY} onChange={this.updateYTicks}>
                <option value="none">none</option>
                <option value="short">short</option>
                <option value="full">full</option>
              </select>
            </label>
          </div>
        </form>
        <JubilationChart height={300} width={600}>
          <JubilationScatter data={this.state.points} />
          {<XAxis title="X axis" numTicks={numXTicks} tickType={tickTypeX} axisLine={showX} />}
          {<YAxis title="Y axis" numTicks={numYTicks} tickType={tickTypeY} axisLine={showY} />}
        </JubilationChart>
      </div>
    );
  }
}

export default AxisExample;
