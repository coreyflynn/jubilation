// @flow
import React from 'react';
import Line from '../jubilation-line';

type Props = {
  position: number,
  dx?: number,
  tickType?: TickType,
  context: JubilationContext
};


export default function YTick({ position, tickType = 'short', dx = 0, context }: Props): React.Element<*> {
  const [computedXMin, computedXMax] = context.xScale.domain();

  const typeMap = {
    none: [computedXMin, computedXMin],
    short: [computedXMin + (dx / 2), computedXMin],
    full: [computedXMin + (dx / 2), computedXMax],
  };
  const [left, right] = typeMap[tickType];

  return (<Line
    y1={position}
    y2={position}
    x1={left}
    x2={right}
  />);
}
