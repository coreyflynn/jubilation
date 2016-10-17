// @flow
import { scaleLinear } from 'd3-scale';
import JubilationTheme from '../jubilation-theme';

export default function getContext(context: JubilationContext) : JubilationContext {
  if (context) return context;
  return {
    theme: JubilationTheme,
    xScale: scaleLinear().domain([0, 300]).range([0, 300]),
    yScale: scaleLinear().domain([0, 100]).range([0, 100]),
  };
}
