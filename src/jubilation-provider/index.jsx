// @flow
import React from 'react';
import uuid from 'uuid';
import theme from '../jubilation-theme';
import Context from '../jubilation-context';

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
  uuid: string
  domainMap: DomainMap

  static defaultProps: Props = {
    children: [],
    xDomain: [0, 300],
    yDomain: [100, 0],
    xRange: [0, 300],
    yRange: [0, 100],
    theme,
  };
  static childContextTypes = { JubilationContext: React.PropTypes.object };

  constructor(props: Props, context: Object) {
    super(props, context);
    this.uuid = uuid.v4();
    this.domainMap = { [this.uuid]: { x: props.xDomain, y: props.yDomain } };
    this.JubilationContext = new Context(props.theme, this.domainMap, props.xRange, props.yRange);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.JubilationContext.theme = nextProps.theme;
    const nextDomainMap = { [this.uuid]: { x: nextProps.xDomain, y: nextProps.yDomain } };
    this.JubilationContext.addDomain(nextDomainMap);
  }

  getChildContext = () => ({ JubilationContext: this.JubilationContext })

  render = () => <div>{this.props.children}</div>
}
