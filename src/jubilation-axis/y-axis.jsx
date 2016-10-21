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

export default function YAxis(
  { min, max, position = 0, numTicks = 0, tickLines = false, axisLine = false }: Props,
  { JubilationContext }: Context
  ): React.Element<*> {
  const context = getContext(JubilationContext);
  const computedMin = min || context.yScale.domain()[0];
  const computedMax = max || context.yScale.domain()[1];
  const ticks = getTicks(computedMin, computedMax, numTicks, 'y', position, context);
  const dx = -5;

  return (
    <Animation data={{ min: computedMin, max: computedMax, position, dx, ticks }}>
      {data =>
        <g>
          <Label x={data.position} y={data.min} dx={data.dx} textAnchor="end">
            {Math.round(data.min)}
          </Label>
          {data.ticks.map(tick => <Label {...tick}>{Math.round(tick.val)}</Label>)}
          <Label x={data.position} y={data.max} dx={data.dx} textAnchor="end">
            {Math.round(data.max)}
          </Label>
        </g>
      }
    </Animation>
  );
}

YAxis.contextTypes = { JubilationContext: React.PropTypes.object };
