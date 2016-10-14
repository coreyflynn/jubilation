// @flow
import React from 'react';
import { default as theme } from '../jubilation-theme';

type Props = { x: number, y: number, size?: number, color?: string };
type Context = { JubilationContext: JubilationContext };

/**
 * A single data point. Returns an SVG circle element
 */
export default function JubilationPoint(
  { x, y, color, size = 4 }: Props, { JubilationContext }: Context): React.Element<*> {
  let fill: string;
  if (color) {
    fill = color;
  } else {
    fill = JubilationContext ? JubilationContext.theme.colors[0] : theme.colors[0];
  }
  return <circle cx={x} cy={y} r={size} fill={fill} />;
}

JubilationPoint.contextTypes = { JubilationContext: React.PropTypes.object };
