// @flow
import React from 'react';
import uuid from 'uuid';
import getDomainMap from '../helpers/scatter';
import Rect from '../jubilation-rect';
import Label from '../jubilation-label';
import getContext from '../helpers/context';
import getTicks from '../helpers/axis';
import getTextWidth from '../helpers/text';

type Props = {
  data: number[],
  labels: string[],
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

  static defaultProps: Props = { data: [], labels: [], gapWidth: 0.05 };

  static contextTypes = { JubilationContext: React.PropTypes.object }

  constructor(props: Props, context: Context) {
    super(props, context);
    this.uuid = uuid.v4();
    this.context.JubilationContext = getContext(this.context.JubilationContext);
    this.setXRange();
    this.domainMap = getDomainMap(this.uuid, props.data.map(d => ({ x: d, y: 0 })));
    this.context.JubilationContext.addDomain(this.domainMap);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.domainMap = getDomainMap(this.uuid, nextProps.data.map(d => ({ x: d, y: 0 })));
    this.context.JubilationContext.addDomain(this.domainMap);
  }

  /**
   * Inteligently sets the chart's xRange given the passed in label lengths
   */
  setXRange(): void {
    const { xRange } = this.context.JubilationContext;
    const maxLabelWidth: number = this.props.labels
      .map(l => getTextWidth(l))
      .reduce((a, b) => Math.max(a, b), 0);
    this.context.JubilationContext.xRange = [maxLabelWidth + 5, xRange[1]];
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
    const { data, labels, color, style } = this.props;
    const { xScale } = this.context.JubilationContext;
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

        {/* render up to as many labels as we have data points */}
        {labels.slice(0, data.length).map((label, i) =>
          <Label
            key={i}
            y={this.getY(i) - (this.getDataBinSize() / 2)}
            dx={-5}
            textAnchor="end"
          >
            {label}
          </Label>
        )}
      </g>
    );
  }
}
