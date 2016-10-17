import React from 'react';
import getContext from '../helpers/context';
import Label from '../jubilation-label';

type Props = {
  min: number,
  max: number,
  yPosition: number,
  numTicks: number,
  tickLines: boolean,
  axisLine: boolean
};

export default function XAxis(
  { min = 0, max = 300, yPosition = 100, numTicks = 0, tickLines = false, axisLine = false }: Props,
  { JubilationContext }: Context
  ): React.Element<*> {
  const context = getContext(JubilationContext);
  const offsetPosition = yPosition - (context.theme.labelStyle.fontSize / 2);
  const ticks = [];

  for (let i = 0; i < numTicks; i += 1) {
    const val = (((max - min) / (numTicks + 1)) * (i + 1)) + min;
    ticks.push(
      <Label
        key={i}
        x={context.xScale(val)}
        y={context.yScale(offsetPosition)}
        textAnchor="middle"
      >
        {Math.round(val)}
      </Label>
    );
  }

  return (
    <g>
      <Label x={context.xScale(min)} y={context.yScale(offsetPosition)}>{Math.round(min)}</Label>
      {ticks}
      <Label x={context.xScale(max)} y={context.yScale(offsetPosition)} textAnchor="end">
        {Math.round(max)}
      </Label>
    </g>
  );
}

XAxis.contextTypes = { JubilationContext: React.PropTypes.object };
