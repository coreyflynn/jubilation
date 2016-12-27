// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import ScatterPlotExample from './scatterplot';
import AxisExample from './axis';

ReactDOM.render(
  <div>
    <h1>Axis Examples</h1>
    <AxisExample />
    <h1>Scatter Plot Examples</h1>
    <ScatterPlotExample />
  </div>,
  document.getElementById('root')
);
