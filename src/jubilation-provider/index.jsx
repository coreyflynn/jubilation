// @flow
import React from 'react';
import { default as JubilationTheme } from '../jubilation-theme';
import { scaleLinear } from 'd3-scale';

type Props = {
  children: React.Element<*> | React.Element<*>[],
  xDomain: number[],
  yDomain: number[],
  xRange: number[],
  yRange: number[],
  theme: Theme,
};

/**
 * The JubilationProvider is a higher order component in change of passing down
 * context to all components under it for common charting needs such as theme and
 * scale. The Provider provides a single object, JubilationContext, that exposes
 * an API to manipulate the context data on the fly while still playing nice with
 * components above or below it in the render tree that may be manipulating context
 * in other ways.
 */
export default class JubilationProvider extends React.Component {
  JubilationContext: JubilationContext

  static defaultProps: Props = {
    children: [],
    xDomain: [0, 300],
    yDomain: [0, 100],
    xRange: [0, 300],
    yRange: [0, 100],
    theme: JubilationTheme,
  };
  static childContextTypes = { JubilationContext: React.PropTypes.object }

  constructor(props: Props, context: Object) {
    super(props, context);
    this.JubilationContext = {
      theme: props.theme,
      xScale: scaleLinear().domain(props.xDomain).range(props.xRange),
      yScale: scaleLinear().domain(props.yDomain).range(props.yRange),
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    this.JubilationContext.theme = nextProps.theme;
    this.JubilationContext.xScale = scaleLinear().domain(nextProps.xDomain).range(nextProps.xRange);
    this.JubilationContext.yScale = scaleLinear().domain(nextProps.yDomain).range(nextProps.yRange);
  }

  getChildContext = () => ({ JubilationContext: this.JubilationContext })

  render = () => <div>{this.props.children}</div>
}
