// @flow
import React from 'react';
import uuid from 'uuid';
import getDomainMap from '../helpers/scatter';
import Rect from '../jubilation-rect';

type Props = {
  data: number[],
  gapWidth: number,
  color?: string,
  style?: Object,
};
type Context = { JubilationContext: JubilationContext };

export default class JubilationHorizontalBarChart extends React.Component {
  props: Props
  context: Context
  uuid: string
  domainMap: DomainMap

  static defaultProps: Props = { data: [], gapWidth: 0.05 };

  static contextTypes = { JubilationContext: React.PropTypes.object }

  constructor(props: Props, context: Context) {
    super(props, context);
    this.uuid = uuid.v4();
    this.domainMap = getDomainMap(this.uuid, props.data.map(d => ({ x: d, y: 0 })));
    this.context.JubilationContext.addDomain(this.domainMap);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.domainMap = getDomainMap(this.uuid, nextProps.data.map(d => ({ x: d, y: 0 })));
    this.context.JubilationContext.addDomain(this.domainMap);
  }

  getHeight() {
    const binHeight = this.getBinHeight();
    return binHeight - ((this.props.gapWidth * binHeight) * 2);
  }

  getBinHeight() {
    const min: number = this.context.JubilationContext.yScale.range()[0];
    const max: number = this.context.JubilationContext.yScale.range()[1];
    const yHeight = max - min;
    return yHeight / this.props.data.length;
  }

  getY(i: number) {
    const dataHeight = this.context.JubilationContext.yScale.domain()[0];
    const dataBinSize = dataHeight / this.props.data.length;
    return ((i + 1) * dataBinSize) - (dataBinSize * this.props.gapWidth);
  }

  render() {
    const { data, color, style } = this.props;
    const { xScale } = this.context.JubilationContext;
    window.JubilationContext = this.context.JubilationContext;
    return (
      <g>
        {data.map((datum, i) =>
          <Rect
            key={i}
            x={0}
            y={this.getY(i)}
            width={xScale(datum)}
            height={this.getHeight()}
            color={color}
            style={style}
          />
        )}
      </g>
    );
  }
}
