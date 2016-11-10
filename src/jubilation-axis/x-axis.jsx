// @flow
import React from 'react';
import getContext from '../helpers/context';
import getTicks from '../helpers/axis';
import Label from '../jubilation-label';
import Animation from '../jubilation-animation';

type Props = {
  min?: number,
  max?: number,
  title?: string,
  position?: number,
  numTicks?: number,
  tickLines?: boolean,
  axisLine?: boolean
};
type Context = { JubilationContext: JubilationContext };

export default function XAxis(
  { min, max, title, position = 0, numTicks = 0, tickLines = false, axisLine = false }: Props,
  { JubilationContext }: Context
  ): React.Element<*> {
  const context = getContext(JubilationContext);
  const computedMin = min || min === 0 ? min : context.xScale.domain()[0];
  const computedMax = max || max === 0 ? max : context.xScale.domain()[1];
  const ticks = getTicks(computedMin, computedMax, numTicks, 'x', position, context);
  const offset = context.theme.labelStyle.fontSize;

  return (
    <Animation data={{ min: computedMin, max: computedMax, position, offset, ticks }}>
      {data =>
        <g>
          {/* tick values */}
          <Label x={data.min} y={data.position} dy={data.offset} textAnchor="middle">
            {Math.round(data.min)}
          </Label>
          {data.ticks.map(tick => <Label {...tick}>{Math.round(tick.val)}</Label>)}
          <Label x={data.max} y={data.position} dy={data.offset} textAnchor="middle">
            {Math.round(data.max)}
          </Label>

          {/* axis title */}
          {title && <Label
            x={((data.max - data.min) / 2) + data.min}
            y={data.position}
            dy={(data.offset * 2) + 2}
            style={{ fontSize: context.theme.labelStyle.fontSize * context.theme.scale }}
            textAnchor="middle"
          >
            {title}
          </Label>}
        </g>
      }
    </Animation>
  );
}

XAxis.contextTypes = { JubilationContext: React.PropTypes.object };
