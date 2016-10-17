// @flow
import React from 'react';
import getContext from '../helpers/context';
import getTicks from '../helpers/axis';
import Label from '../jubilation-label';

type Props = {
  min: number,
  max: number,
  yPosition: number,
  numTicks: number,
  tickLines: boolean,
  axisLine: boolean
};
type Context = { JubilationContext: JubilationContext };

export default function XAxis(
  { min = 0, max = 300, yPosition = 100, numTicks = 0, tickLines = false, axisLine = false }: Props,
  { JubilationContext }: Context
  ): React.Element<*> {
  const context = getContext(JubilationContext);
  const ticks = getTicks(min, max, numTicks, 'x', yPosition, context);
  const offset = -context.theme.labelStyle.fontSize / 2;

  return (
    <g>
      <Label x={min} y={yPosition} dy={offset}>{Math.round(min)}</Label>
      {ticks.map(tick => <Label {...tick}>{context.xScale(tick.val)}</Label>)}
      <Label x={max} y={yPosition} dy={offset} textAnchor="end">
        {Math.round(max)}
      </Label>
    </g>
  );
}

XAxis.contextTypes = { JubilationContext: React.PropTypes.object };
