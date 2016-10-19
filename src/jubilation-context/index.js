// @flow
import { scaleLinear } from 'd3-scale';
import { collapseDomains } from '../helpers/provider';

export default class JubilationContext {
  theme: Theme
  xScale: Function
  yScale: Function
  xRange: number[]
  yRange: number[]
  domainMap: DomainMap
  subscriptions: Function[]

  constructor(theme: Theme, domainMap: DomainMap, xRange: number[], yRange: number[]) {
    this.theme = theme;
    this.xRange = xRange;
    this.yRange = yRange;
    this.domainMap = domainMap;
    this.xScale = scaleLinear().domain(collapseDomains(domainMap, 'x')).range(xRange);
    this.yScale = scaleLinear().domain(collapseDomains(domainMap, 'y')).range(yRange);
    this.subscriptions = [];
  }

  update = () => {
    this.xScale = scaleLinear().domain(collapseDomains(this.domainMap, 'x')).range(this.xRange);
    this.yScale = scaleLinear().domain(collapseDomains(this.domainMap, 'y')).range(this.yRange);
    this.subscriptions.forEach(f => f());
    return this;
  }

  subscribe = (f: Function) => { this.subscriptions.push(f); }

  addDomain = (addMap: DomainMap) => {
    Object.keys(addMap).forEach((key) => { this.domainMap[key] = addMap[key]; });
    this.update();
  }

  getMax = () => this.xScale.domain()

  removeDomain = (removeMap: DomainMap) => {
    Object.keys(removeMap).forEach((key) => { delete this.domainMap[key]; });
    this.update();
  }
}
