// @flow
import JubilationTheme from '../jubilation-theme';

function yScale(x: number): number { return x; }
yScale.domain = function domain(): number[] { return [100, 0]; };
yScale.range = function domain(): number[] { return [0, 100]; };

function xScale(x: number): number { return x; }
xScale.domain = function domain(): number[] { return [0, 300]; };
xScale.range = function domain(): number[] { return [0, 300]; };

export const defaultContext: JubilationContext = {
  theme: JubilationTheme,
  xScale,
  yScale,
  xRange: [0, 300],
  yRange: [0, 100],
  addDomain() {},
  removeDomain() {},
  update() {},
};


export default function getContext(context: JubilationContext): JubilationContext {
  return context || defaultContext;
}
