// @flow
import React from 'react';
import getContext from '../helpers/context';
import Animation from '../jubilation-animation';

type Props = { x?: number, y?: number, size?: number, color?: string, style?: Object };
type Context = { JubilationContext: JubilationContext };

/**
 * A single data point. Returns an SVG circle element
 */
export default function JubilationPoint(
  { x = 0, y = 0, color, style, size = 4 }: Props,
  { JubilationContext }: Context): React.Element<*> {
  const context = getContext(JubilationContext);
  const { xScale, yScale } = context;
  let fill = context.theme.colors[0];
  if (color) fill = color;

  return (
    <Animation data={{ cx: x, cy: y, size, fill, style }}>
      {data =>
        <circle
          cx={xScale(data.cx)}
          cy={yScale(data.cy)}
          r={data.size}
          fill={data.fill}
          style={data.style}
        />
      }
    </Animation>
  );
}

JubilationPoint.contextTypes = { JubilationContext: React.PropTypes.object };
