// @flow
import React from 'react';
import Line from '../jubilation-line';

type Props = {
  position: number,
  tickType?: TickType,
  context: JubilationContext,
};

export default function XTick({ position, tickType = 'short', context }: Props): React.Element<*> {
  const {
    yScale,
    theme: {
      labelStyle: { fontSize },
    },
  } = context;
  const [computedYMax, computedYMin] = yScale.domain();
  const typeMap = {
    none: [computedYMin, computedYMin],
    short: [computedYMin - (fontSize / 4), computedYMin],
    full: [computedYMin - (fontSize / 4), computedYMax],
  };
  const [bottom, top] = typeMap[tickType];

  return (<Line
    x1={position}
    x2={position}
    y1={bottom}
    y2={top}
  />);
}
