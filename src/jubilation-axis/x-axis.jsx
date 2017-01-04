// @flow
import React from 'react';
import getContext from '../helpers/context';
import getTicks from '../helpers/axis';
import { XTick } from '../jubilation-tick';
import Label from '../jubilation-label';
import Line from '../jubilation-line';
import Animation from '../jubilation-animation';

type Props = {
  min?: number,
  max?: number,
  title?: string,
  position?: number,
  numTicks?: number,
  extendTicks?: boolean,
  axisLine?: boolean
};
type Context = { JubilationContext: JubilationContext };

export default function XAxis(
  { min, max, title, position = 0, numTicks = 0, extendTicks = false, axisLine = false }: Props,
  { JubilationContext }: Context
  ): React.Element<*> {
  const context = getContext(JubilationContext);
  const computedXMin = min || min === 0 ? min : context.xScale.domain()[0];
  const computedXMax = max || max === 0 ? max : context.xScale.domain()[1];
  const ticks = getTicks({
    min: computedXMin,
    max: computedXMax,
    numTicks,
    axisType: 'x',
    position,
    context,
  });
  const offset = context.theme.labelStyle.fontSize;

  return (
    <Animation data={{ min: computedXMin, max: computedXMax, position, offset, ticks }}>
      {(data) =>
        <g>
          <XTick
            position={data.min}
            context={context}
            extended={extendTicks}
          />
          <Label x={data.min} y={data.position} dy={data.offset} textAnchor="middle">
            {Math.round(data.min)}
          </Label>
          {
            data.ticks.map((tick) =>
              <g key={`XTick${tick.x}`}>
                <XTick
                  position={tick.x}
                  context={context}
                  extended={extendTicks}
                />
                <Label {...tick}>{Math.round(tick.val)}</Label>
              </g>
            )
          }
          <XTick
            position={data.max}
            context={context}
            extended={extendTicks}
          />
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
