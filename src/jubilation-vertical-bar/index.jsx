// @flow
import React from 'react';
import uuid from 'uuid';
import getDomainMap from '../helpers/scatter';
import Rect from '../jubilation-rect';
import Label from '../jubilation-label';
import getContext from '../helpers/context';
import getTicks from '../helpers/axis';

type Props = {
  data: number[],
  labels: string[],
  gapWidth: number,
  color?: string,
  style?: Object,
};
type Context = { JubilationContext: JubilationContext };

export default class JubilationVerticalBarChart extends React.Component {
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
    this.domainMap = getDomainMap(this.uuid, props.data.map(d => ({ x: 0, y: d })));
    this.context.JubilationContext.addDomain(this.domainMap);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.domainMap = getDomainMap(this.uuid, nextProps.data.map(d => ({ x: 0, y: d })));
    this.context.JubilationContext.addDomain(this.domainMap);
  }

  getWidth(): number {
    const binWidth = this.getBinWidth();
    return binWidth - ((this.props.gapWidth * binWidth) * 2);
  }

  getBinWidth(): number {
    const min: number = this.context.JubilationContext.xScale.range()[0];
    const max: number = this.context.JubilationContext.xScale.range()[1];
    const xWidth = max - min;
    return xWidth / this.props.data.length;
  }

  getDataBinSize(): number {
    return this.context.JubilationContext.xScale.domain()[1] / this.props.data.length;
  }

  getX(i: number): number {
    const dataBinSize = this.getDataBinSize();
    return ((i) * dataBinSize) + (dataBinSize * this.props.gapWidth);
  }

  getLabelPositions(): Tick[] {
    const { xScale } = this.context.JubilationContext;
    return getTicks({
      min: xScale.domain()[0],
      max: xScale.domain()[1],
      numTicks: this.props.data.length,
      axisType: 'x',
      position: 0,
      context: this.context.JubilationContext,
    });
  }

  render() {
    const { data, labels, color, style, gapWidth } = this.props;
    const { yScale, theme } = this.context.JubilationContext;
    return (
      <g>
        {data.map((datum, i) =>
          <Rect
            key={i}
            x={this.getX(i)}
            y={datum}
            width={this.getWidth()}
            height={yScale(0) - yScale(datum)}
            color={color}
            style={style}
          />
        )}

        {/* render up to as many labels as we have data points */}
        {labels.slice(0, data.length).map((label, i) =>
          <Label
            key={i}
            x={(this.getX(i) + (this.getDataBinSize() / 2)) - (this.getDataBinSize() * gapWidth)}
            dy={theme.labelStyle.fontSize}
            textAnchor="middle"
          >
            {label}
          </Label>
        )}
      </g>
    );
  }
}
