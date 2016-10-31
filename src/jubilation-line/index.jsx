// @flow
import React from 'react';
import getContext from '../helpers/context';
import Animation from '../jubilation-animation';

type Props = { x1?: number, x2?: number, y1?: number, y2?: number};
type Context = { JubilationContext: JubilationContext };

/**
 * A line segment, defined by two endpoints. Returns an SVG line element.
 */
export default function JubilationLine({ x1, y1, x2, y2 }: Props,
  { JubilationContext }: Context) {
  const context = getContext(JubilationContext);
  const { xScale, yScale } = context;

  return (
    <Animation data={{ x1, x2, y1, y2 }}>
      {data =>
        <line
          x1={xScale(data.x1)}
          y1={yScale(data.y1)}
          x2={xScale(data.x2)}
          y2={yScale(data.y2)}
        />
      }
    </Animation>
  );
}

JubilationLine.contextTypes = { JubilationContext: React.PropTypes.object };
