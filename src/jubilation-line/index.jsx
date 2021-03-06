// @flow
import React from 'react';
import getContext from '../helpers/context';
import Animation from '../jubilation-animation';

type Props = { x1?: number, x2?: number, y1?: number, y2?: number};
type Context = { JubilationContext: JubilationContext };

/**
 * A line segment, defined by two endpoints. Returns an SVG line element.
 */
export default function JubilationLine({ x1 = 0, y1 = 0, x2 = 1, y2 = 1, ...rest }: Props,
  { JubilationContext }: Context) {
  const context = getContext(JubilationContext);
  const { xScale,
    yScale,
    theme: { labelStyle: { fill } },
  } = context;

  return (
    <Animation data={{ x1, x2, y1, y2, fill }}>
      {data =>
        <line
          x1={xScale(data.x1)}
          y1={yScale(data.y1)}
          x2={xScale(data.x2)}
          y2={yScale(data.y2)}
          stroke={data.fill}
          {...rest}
        />
      }
    </Animation>
  );
}

JubilationLine.contextTypes = { JubilationContext: React.PropTypes.object };
