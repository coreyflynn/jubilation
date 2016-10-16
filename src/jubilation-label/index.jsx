// @flow
import React from 'react';
import { scaleLinear } from 'd3-scale';

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
  let xScale: Function;
  let yScale: Function;
  if (JubilationContext) {
    xScale = JubilationContext.xScale;
    yScale = JubilationContext.yScale;
  } else {
    xScale = scaleLinear().domain([0, 300]).range([0, 300]);
    yScale = scaleLinear().domain([0, 100]).range([0, 100]);
  }

  const textProps = {
    x: xScale(x),
    y: yScale(y),
    textAnchor,
    style: JubilationContext.theme.labelStyle,
  };
  const tspanProps = { dx, dy };

  return (
    <text {...textProps} dominantBaseline="middle">
      <tspan {...tspanProps}>{children}</tspan>
    </text>
  );
}

JubilationLabel.contextTypes = { JubilationContext: React.PropTypes.object };
