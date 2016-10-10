// @flow
import React from 'react';
import { default as theme } from '../jubilation-theme';

type Props = { x: number, y: number, size?: number, color?: string };

/**
 * A single data point. Returns an SVG circle element
 * @param {Props} { x, y, size = 10, color = theme.colors[0] }
 * @returns {}
 */
export default function JubilationPoint({ x, y, size = 4, color = theme.colors[0] }: Props) {
  return <circle cx={x} cy={y} r={size} fill={color} />;
}
