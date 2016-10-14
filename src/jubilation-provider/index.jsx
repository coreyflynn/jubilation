// @flow
import React from 'react';
import { default as JubilationTheme } from '../jubilation-theme';

type Props = {
  theme: Theme,
  children: React.Element<*> | React.Element<*>[],
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

  static defaultProps: Props = { theme: JubilationTheme, children: [] };
  static childContextTypes = { JubilationContext: React.PropTypes.object }

  constructor(props: Props, context: Object) {
    super(props, context);
    this.JubilationContext = {
      theme: props.theme,
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    this.JubilationContext.theme = nextProps.theme;
  }

  getChildContext() { return { JubilationContext: this.JubilationContext }; }

  render = () => <div>{this.props.children}</div>
}
