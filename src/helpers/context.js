// @flow
import JubilationTheme from '../jubilation-theme';

export default function getContext(context: JubilationContext): JubilationContext {
  if (context) return context;
  function scale(x: number): number { return x; }
  scale.domain = function domain(): number[] { return [0, 100]; };
  return {
    theme: JubilationTheme,
    xScale: scale,
    yScale: scale,
    addDomain() {},
    removeDomain() {},
    update() {},
  };
}
