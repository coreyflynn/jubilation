// @flow
import React from 'react';
import { default as theme } from '../jubilation-theme';
import { scaleLinear } from 'd3-scale';

type Props = { x: number, y: number, size?: number, color?: string };
type Context = { JubilationContext: JubilationContext };

/**
 * A single data point. Returns an SVG circle element
 */
export default function JubilationPoint(
  { x, y, color, size = 4 }: Props, { JubilationContext }: Context): React.Element<*> {
  let fill: string;
  let xScale: Function;
  let yScale: Function;
  if (JubilationContext) {
    fill = JubilationContext.theme.colors[0];
    xScale = JubilationContext.xScale;
    yScale = JubilationContext.yScale;
  } else {
    fill = theme.colors[0];
    xScale = scaleLinear().domain([0, 300]).range([0, 300]);
    yScale = scaleLinear().domain([0, 100]).range([0, 100]);
  }

  if (color) { fill = color; }

  return <circle cx={xScale(x)} cy={yScale(y)} r={size} fill={fill} />;
}

JubilationPoint.contextTypes = { JubilationContext: React.PropTypes.object };
