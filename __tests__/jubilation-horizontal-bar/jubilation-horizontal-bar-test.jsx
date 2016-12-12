import React from 'react';
import { shallow } from 'enzyme';
import td from 'testdouble';
import JubilationContext from '../../src/jubilation-context';
import { defaultContext } from '../../src/helpers/context';
import HorizontalBar from '../../src/jubilation-horizontal-bar';


describe('JubilationHorizontalBarChart', () => {
  it('should have a default data prop of []', () => {
    expect(shallow(<HorizontalBar />).instance().props.data).toEqual([]);
  });

  it('should have a default gapWidth prop of 0.05', () => {
    expect(shallow(<HorizontalBar />).instance().props.gapWidth).toBe(0.05);
  });

  it('should set a uuid attribute', () => {
    const re = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
    const uuid = shallow(<HorizontalBar />).instance().uuid;
    expect(re.test(uuid)).toBe(true);
  });

  it('should add data as x data to the domain map', () => {
    const { domainMap, uuid } = shallow(<HorizontalBar data={[1, 2]} />).instance();
    expect(domainMap[uuid].x).toEqual([1, 2]);
  });

  it('should add dummy y data to the domain map', () => {
    const { domainMap, uuid } = shallow(<HorizontalBar data={[1, 2]} />).instance();
    expect(domainMap[uuid].y).toEqual([0, 0]);
  });

  it('shoud default to the base Jubilation context', () => {
    const instance = shallow(<HorizontalBar />).instance();
    expect(instance.context.JubilationContext).toEqual(defaultContext);
  });
});
