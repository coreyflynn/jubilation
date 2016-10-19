// @flow
import React from 'react';
import getContext from '../helpers/context';
import getTicks from '../helpers/axis';
import Label from '../jubilation-label';
import Animation from '../jubilation-animation';

type Props = {
  min?: number,
  max?: number,
  position: number,
  numTicks: number,
  tickLines: boolean,
  axisLine: boolean
};
type Context = { JubilationContext: JubilationContext };

export default function XAxis(
  { min, max, position = 0, numTicks = 0, tickLines = false, axisLine = false }: Props,
  { JubilationContext }: Context
  ): React.Element<*> {
  const context = getContext(JubilationContext);
  const computedMin = min || context.xScale.domain()[0];
  const computedMax = max || context.xScale.domain()[1];
  const ticks = getTicks(computedMin, computedMax, numTicks, 'x', position, context);
  const offset = context.theme.labelStyle.fontSize;

  return (
    <Animation data={{ min: computedMin, max: computedMax, position, offset, ticks }}>
      {data =>
        <g>
          <Label x={data.min} y={data.position} dy={data.offset} textAnchor="middle">
            {Math.round(data.min)}
          </Label>
          {data.ticks.map(tick => <Label {...tick}>{Math.round(tick.val)}</Label>)}
          <Label x={data.max} y={data.position} dy={data.offset} textAnchor="middle">
            {Math.round(data.max)}
          </Label>
        </g>
      }
    </Animation>
  );
}

XAxis.contextTypes = { JubilationContext: React.PropTypes.object };
