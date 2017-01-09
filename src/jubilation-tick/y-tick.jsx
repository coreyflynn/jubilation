// @flow
import React from 'react';
import Line from '../jubilation-line';

type Props = {
  position: number,
  dx?: number,
  extended?: boolean,
  context: JubilationContext
};

export default function YTick({ position, extended = false, dx = 0, context }: Props) {
  const [computedXMin, computedXMax] = context.xScale.domain();

  return (<Line
    x1={computedXMin + dx}
    y1={position}
    x2={extended ? computedXMax : (computedXMin)}
    y2={position}
  />);
}
