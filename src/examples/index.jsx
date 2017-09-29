// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import AxisExample from './axis';
import BarPlotExample from './barplot';
import LineExample from './line';
import ScatterPlotExample from './scatterplot';

ReactDOM.render(
  <div>
    <h1>Axis Examples</h1>
    <AxisExample />
    <BarPlotExample />
    <ScatterPlotExample />
    <LineExample />
  </div>,
  document.getElementById('root')
);
