// @flow
import { scaleLinear } from 'd3-scale';
import JubilationTheme from '../jubilation-theme';

export default function getContext(context: JubilationContext) : JubilationContext {
  if (context) return context;
  return {
    theme: JubilationTheme,
    xScale: x => x,
    yScale: x => x,
    addDomain() {},
    removeDomain() {},
    update() {},
  };
}
