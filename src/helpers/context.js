// @flow
import JubilationTheme from '../jubilation-theme';

function scale(x: number): number { return x; }
scale.domain = function domain(): number[] { return [100, 0]; };
scale.range = function domain(): number[] { return [0, 100]; };

export const defaultContext: JubilationContext = {
  theme: JubilationTheme,
  xScale: scale,
  yScale: scale,
  addDomain() {},
  removeDomain() {},
  update() {},
};


export default function getContext(context: JubilationContext): JubilationContext {
  return context || defaultContext;
}
