// @flow
import React from 'react';
import getContext from '../helpers/context';
import Animation from '../jubilation-animation';

type Props = {
  x?: number,
  y?: number,
  width?: number,
  height?: number,
  color?: string,
  style?: Object,
};
type Context = { JubilationContext: JubilationContext };

/**
 * A single SVG rectangle. A basic building block for bar graphs
 */
export default function JubilationRect(
  { x = 0, y = 0, color, style = {}, width = 10, height = 10 }: Props,
  { JubilationContext }: Context): React.Element<*> {
  const { xScale, yScale, theme } = getContext(JubilationContext);
  const targetX = xScale(x);
  const targetY = yScale(y);
  let fill = theme.colors[0];
  if (color) fill = color;

  return (
    <Animation data={{ targetX, targetY, width, height, fill, style }}>
      {data =>
        <rect
          x={data.targetX}
          y={data.targetY}
          width={data.width}
          height={data.height}
          fill={data.fill}
          style={data.style}
        />
      }
    </Animation>
  );
}

JubilationRect.contextTypes = { JubilationContext: React.PropTypes.object };
