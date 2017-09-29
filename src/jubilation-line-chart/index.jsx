// @flow
import React from 'react';
import uuid from 'uuid';
import getDomainMap from '../helpers/scatter';
import Point from '../jubilation-point';
import Line from '../jubilation-line';
import { toPairs, sortByX } from '../helpers/line-chart';

type Props = {
  data: Array<Point>,
  color?: string,
  size?: number,
  style?: Object,
  showPoints?: boolean
};
type Context = { JubilationContext: JubilationContext };

export default class JubilationLineChart extends React.Component {
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
    const { color, size, style, showPoints, data } = this.props;

    const pointPairs = toPairs(sortByX(data));

    return (
      <g>
        {pointPairs.map(([point1, point2]) => (
          <g>
            {showPoints && <Point {...point1} color={color} size={size} style={style} />}
            <Line x1={point1.x} x2={point2.x} y1={point1.y} y2={point2.y} />
            {showPoints && <Point {...point2} color={color} size={size} style={style} />}
          </g>
        ))}
      </g>
    );
  }
}
