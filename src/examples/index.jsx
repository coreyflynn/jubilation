// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import AxisExample from './axis';
import BarPlotExample from './barplot';
import ScatterPlotExample from './scatterplot';

ReactDOM.render(
  <div>
    <h1>Axis Examples</h1>
    <AxisExample />
    <BarPlotExample />
    <ScatterPlotExample />
  </div>,
  document.getElementById('root')
);
