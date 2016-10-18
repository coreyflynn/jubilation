// @flow
import React from 'react';
import getContext from '../helpers/context';
import getTicks from '../helpers/axis';
import Label from '../jubilation-label';
import Animation from '../jubilation-animation';

type Props = {
  min: number,
  max: number,
  position: number,
  numTicks: number,
  tickLines: boolean,
  axisLine: boolean
};
type Context = { JubilationContext: JubilationContext };

export default function XAxis(
  { min = 0, max = 300, position = 0, numTicks = 0, tickLines = false, axisLine = false }: Props,
  { JubilationContext }: Context
  ): React.Element<*> {
  const context = getContext(JubilationContext);
  const ticks = getTicks(min, max, numTicks, 'y', position, context);
  const offset = context.theme.labelStyle.fontSize * 2;

  return (
    <Animation data={{ min, max, position, offset, ticks }}>
      {data =>
        <g>
          <Label x={data.position} y={data.min} dx={data.offset} textAnchor="end">
            {Math.round(data.min)}
          </Label>
          {data.ticks.map(tick => <Label {...tick}>{context.yScale(tick.val)}</Label>)}
          <Label x={data.position} y={data.max} dx={data.offset} textAnchor="end">
            {Math.round(data.max)}
          </Label>
        </g>
      }
    </Animation>
  );
}

XAxis.contextTypes = { JubilationContext: React.PropTypes.object };
