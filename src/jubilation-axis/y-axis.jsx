// @flow
import React from 'react';
import getContext from '../helpers/context';
import getTicks from '../helpers/axis';
import Label from '../jubilation-label';

type Props = {
  min: number,
  max: number,
  xPosition: number,
  numTicks: number,
  tickLines: boolean,
  axisLine: boolean
};
type Context = { JubilationContext: JubilationContext };

export default function YAxis(
  { min = 0, max = 300, xPosition = 0, numTicks = 0, tickLines = false, axisLine = false }: Props,
  { JubilationContext }: Context
  ): React.Element<*> {
  const context = getContext(JubilationContext);
  const ticks = getTicks(min, max, numTicks, 'y', xPosition, context);
  const offsetPosition = xPosition + (context.theme.labelStyle.fontSize * 5);

  return (
    <g>
      <Label x={context.xScale(offsetPosition)} y={context.yScale(min)} textAnchor="end">
        {Math.round(min)}
      </Label>
      {ticks.map(tick => <Label {...tick}>{context.yScale(tick.val)}</Label>)}
      <Label x={context.xScale(offsetPosition)} y={context.yScale(max)} textAnchor="end">
        {Math.round(max)}
      </Label>
    </g>
  );
}

YAxis.contextTypes = { JubilationContext: React.PropTypes.object };
