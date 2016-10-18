// @flow

export type Theme = {
  axisColor: string,
  colors: string[],
  name: string,
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

export type JubilationContext = {
  theme: Theme,
  xScale: Function,
  yScale: Function,
  addDomain: Function,
  removeDomain: Function,
}

export type Point = {
  x: number,
  y: number,
}
