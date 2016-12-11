// @flow
import React from 'react';
import uuid from 'uuid';
import getDomainMap from '../helpers/scatter';
import Rect from '../jubilation-rect';
import Label from '../jubilation-label';
import getTicks from '../helpers/axis';

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

  getDataBinSize() {
    return this.context.JubilationContext.yScale.domain()[0] / this.props.data.length;
  }
  
  getY(i: number) {
    const dataBinSize = this.getDataBinSize();
    return ((i + 1) * dataBinSize) - (dataBinSize * this.props.gapWidth);
  }

  getLabelPositions() {
    const { yScale } = this.context.JubilationContext;
    return getTicks(
      yScale.domain()[1],
      yScale.domain()[0],
      this.props.data.length,
      'y',
      0,
      this.context.JubilationContext
    );
  }

  render() {
    const { data, color, style } = this.props;
    const { xScale } = this.context.JubilationContext;
    const { theme } = this.context.JubilationContext;
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
        {data.map((datum, i) =>
          <Label
            y={this.getY(i) - (this.getDataBinSize() / 2)}
            dx={-5}
            textAnchor="end"
          >
            {i}
          </Label>
        )}
      </g>
    );
  }
}
