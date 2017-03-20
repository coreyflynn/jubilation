// @flow
/* eslint no-undef: 0 */

declare type Theme = {
  axisColor: string,
  colors: string[],
  name: string,
  scale: number,
  labelStyle: {
    fill: string,
    fontSize: number,
    fontFamily: string,
    stroke: string
  },
  margin: {
    left: number,
    right: number,
    top: number,
    bottom: number,
  }
};

declare type JubilationContext = {
  theme: Theme,
  xScale: Function,
  yScale: Function,
  xRange: number[],
  yRange: number[],
  addDomain: Function,
  removeDomain: Function,
  update: Function,
}

declare type Point = {
  x: number,
  y: number,
}

declare type DomainMap = {
  [key: string]: {
    x?: number[],
    y?: number[],
  }
};

declare type Tick = {
  key: number,
  x: number,
  y: number,
  dx: number,
  dy: number,
  textAnchor: string,
  val: number,
}
