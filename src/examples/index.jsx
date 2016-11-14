// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import ScatterPlotExample from './scatterplot';
import BarPlotExample from './barplot';

ReactDOM.render(
  <div>
    <BarPlotExample />
    <ScatterPlotExample />
  </div>,
  document.getElementById('root')
);
