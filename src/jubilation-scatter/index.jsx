// @flow
import React from 'react';
import uuid from 'uuid';
import getDomainMap from '../helpers/scatter';
import Point from '../jubilation-point';

type Props = {
  data: Point[],
  color?: string,
  size?: number,
  style?: Object,
};
type Context = { JubilationContext: JubilationContext };

export default class JubilationScatter extends React.Component {
  props: Props
  context: Context
  uuid: string
  domainMap: DomainMap

  static defaultProps: Props = { data: [] };

  static contextTypes = { JubilationContext: React.PropTypes.object }

  constructor(props: Props, context: Context) {
    super(props, context);
    this.uuid = uuid.v4();
    this.domainMap = getDomainMap(this.uuid, props.data);
    this.context.JubilationContext.addDomain(this.domainMap);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.domainMap = getDomainMap(this.uuid, nextProps.data);
    this.context.JubilationContext.addDomain(this.domainMap);
  }

  render() {
    const { color, size, style } = this.props;
    return (
      <g>
        {this.props.data.map(point => <Point {...point} color={color} size={size} style={style} />)}
      </g>
    );
  }
}
