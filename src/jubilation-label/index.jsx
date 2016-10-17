// @flow
import React from 'react';
import getContext from '../helpers/context';

type Props = {
  x: number,
  y: number,
  dx: number,
  dy: number,
  textAnchor: string,
  children: React.Element<*>,
}

type Context = { JubilationContext: JubilationContext };

/**
 * A single label. Renders a text element wrapping a tspan element. The text element
 * can be adjusted with the x and y props. The tspan element can be offset from the containing
 * text element with the dx and dy props.
 */
export default function JubilationLabel(
  { x, y, dx, dy, textAnchor, children }: Props,
  { JubilationContext }: Context): React.Element<*> {
  const { xScale, yScale, theme } = getContext(JubilationContext);

  const textProps = { x: xScale(x), y: yScale(y), style: theme.labelStyle, textAnchor };
  const tspanProps = { dx, dy };

  return (
    <text {...textProps} dominantBaseline="middle">
      <tspan {...tspanProps}>{children}</tspan>
    </text>
  );
}

JubilationLabel.contextTypes = { JubilationContext: React.PropTypes.object };
