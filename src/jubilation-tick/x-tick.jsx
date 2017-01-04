import React from 'react';
import Line from '../jubilation-line';

type Props = {
  position: number,
  extended?: boolean,
  context: JubilationContext
};

export default function XTick({ position, extended = false, context }: Props) {
  const { yScale, theme: { labelStyle: { fontSize }}} = context;
  const [computedYMin, computedYMax] = yScale.domain();

  return <Line
    x1={position}
    y1={computedYMax - (fontSize / 4)}
    x2={position}
    y2={extended ? computedYMin : computedYMax}
  />
}
