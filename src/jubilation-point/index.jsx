// @flow
import React from 'react';
import getContext from '../helpers/context';
import Animation from '../jubilation-animation';

type Props = { x: number, y: number, size?: number, color?: string };
type Context = { JubilationContext: JubilationContext };

/**
 * A single data point. Returns an SVG circle element
 */
export default function JubilationPoint(
  { x, y, color, size = 4 }: Props, { JubilationContext }: Context): React.Element<*> {
  const context = getContext(JubilationContext);
  const { xScale, yScale } = context;
  let fill = context.theme.colors[0];
  if (color) fill = color;

  return (
    <Animation data={{ x, y, size, fill }}>
      {data =>
        <circle cx={xScale(data.x)} cy={yScale(data.y)} r={data.size} fill={data.fill} />
      }
    </Animation>
  );
}

JubilationPoint.contextTypes = { JubilationContext: React.PropTypes.object };
