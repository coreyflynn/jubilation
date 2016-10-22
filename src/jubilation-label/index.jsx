// @flow
import React from 'react';
import getContext from '../helpers/context';
import Animation from '../jubilation-animation';

type Props = {
  x?: number,
  y?: number,
  dx?: number,
  dy?: number,
  style?: Object,
  textAnchor?: string,
  children?: React.Element<*> | React.Element<*>[],
}

type Context = { JubilationContext: JubilationContext };

/**
 * A single label. Renders a text element wrapping a tspan element. The text element
 * can be adjusted with the x and y props. The tspan element can be offset from the containing
 * text element with the dx and dy props.
 */
export default function JubilationLabel(
  { x = 0, y = 0, dx = 0, dy = 0, style = {}, textAnchor = 'start', children }: Props,
  { JubilationContext }: Context): React.Element<*> {
  const { xScale, yScale, theme } = getContext(JubilationContext);

  const textProps = {
    x: xScale(x),
    y: yScale(y),
    style: { ...theme.labelStyle, ...style },
    textAnchor,
  };
  const tspanProps = { dx, dy };

  return (
    <Animation data={{ textProps, tspanProps }}>
      {data =>
        <text {...data.textProps} dominantBaseline="middle">
          <tspan {...data.tspanProps}>{children}</tspan>
        </text>
      }
    </Animation>
  );
}

JubilationLabel.contextTypes = { JubilationContext: React.PropTypes.object };
