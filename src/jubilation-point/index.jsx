// @flow
import React from 'react';
import getContext from '../helpers/context';

type Props = { x: number, y: number, size?: number, color?: string };
type Context = { JubilationContext: JubilationContext };

/**
 * A single data point. Returns an SVG circle element
 */
export default function JubilationPoint(
  { x, y, color, size = 4 }: Props, { JubilationContext }: Context): React.Element<*> {
  const context = getContext(JubilationContext);
  const { xScale, yScale } = context;
  let fill = context.theme.colors[0];
  if (color) fill = color;

  return <circle cx={xScale(x)} cy={yScale(y)} r={size} fill={fill} />;
}

JubilationPoint.contextTypes = { JubilationContext: React.PropTypes.object };
