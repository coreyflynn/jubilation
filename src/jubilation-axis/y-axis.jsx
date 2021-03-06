// @flow
import React from 'react';
import getContext from '../helpers/context';
import getTicks from '../helpers/axis';
import { YTick } from '../jubilation-tick';
import Label from '../jubilation-label';
import Line from '../jubilation-line';
import Animation from '../jubilation-animation';

type Props = {
  min?: number,
  max?: number,
  title?: string,
  position?: number,
  numTicks?: number,
  tickType?: TickType,
  axisLine?: boolean
};
type Context = { JubilationContext: JubilationContext };

export default function YAxis(
  { min, max, title, position = 0, numTicks = 0, tickType, axisLine = false }: Props,
  { JubilationContext }: Context
  ): React.Element<*> {
  const context = getContext(JubilationContext);
  const computedMin = min || min === 0 ? min : context.yScale.domain()[1];
  const computedMax = max || max === 0 ? max : context.yScale.domain()[0];
  const ticks = getTicks({
    min: computedMin,
    max: computedMax,
    numTicks,
    axisType: 'y',
    position,
    context,
  });
  const dx = -5;

  return (
    <Animation data={{ min: computedMin, max: computedMax, position, dx, ticks }}>
      {data =>
        <g>
          {axisLine && <Line
            y1={computedMin}
            y2={computedMax}
            x1={context.xScale.domain()[0]}
            x2={context.xScale.domain()[0]}
          />}
          <g>
            <YTick
              position={data.min}
              dx={data.dx}
              context={context}
              tickType={tickType}
            />
            <Label x={data.position} y={data.min} dx={data.dx} textAnchor="end">
              {Math.round(data.min)}
            </Label>
          </g>
          {data.ticks.map(tick =>
            <g key={`YTick${tick.y}`}>
              <YTick
                position={tick.y}
                dx={tick.dx}
                context={context}
                tickType={tickType}
              />
              <Label {...tick}>{Math.round(tick.val)}</Label>
            </g>
          )}
          <g>
            <YTick
              position={data.max}
              dx={data.dx}
              context={context}
              tickType={tickType}
            />
            <Label x={data.position} y={data.max} dx={data.dx} textAnchor="end">
              {Math.round(data.max)}
            </Label>
          </g>
          {/* axis title */}
          {title && <Label
            x={data.position}
            y={data.max}
            dy={-context.theme.labelStyle.fontSize * context.theme.scale}
            style={{ fontSize: context.theme.labelStyle.fontSize * context.theme.scale }}
            textAnchor="start"
          >
            {title}
          </Label>}
        </g>
      }
    </Animation>
  );
}

YAxis.contextTypes = { JubilationContext: React.PropTypes.object };
