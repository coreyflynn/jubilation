// @flow
import React from 'react';

// component prop types
type Props = {
  height: number,
  width: number,
  children: Object[] | Object,
  title: string,
  desc: string,
}

// SVG object prop types
type SvgProps = {
  "aria-labelledby": string,
  role: string,
  width: number,
  height: number,
}

/**
 * Top level container for jubilation charts. Builds a wrapping SVG element that renders
 * passed in children
 */
export default function JubilationContainer(props: Props) {
  const { title, desc, width, height, children } = props;
  const svgProps: SvgProps = {
    'aria-labelledby': 'title desc',
    role: 'img',
    width,
    height,
  };

  return (
    <svg {...svgProps}>
      <title id="title">{title}</title>
      <desc id="desc">{desc}</desc>
      {children}
    </svg>
    );
}

JubilationContainer.defaultProps = {
  height: 100,
  width: 300,
  children: null,
  title: 'JubilationChart',
  desc: 'JubilationChart',
};
