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
  }
};

export type JubilationContext = {
  theme: Theme,
  xScale: Function,
  yScale: Function,
}
