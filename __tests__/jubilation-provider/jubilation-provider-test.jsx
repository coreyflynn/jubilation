import React from 'react';
import { shallow } from 'enzyme';
import { default as JubilationTheme } from '../../src/jubilation-theme';
import JubilationProvider from '../../src/jubilation-provider';

describe('JubilationProvider', () => {
  it('should use the JubilationTheme by default', () => {
    expect(shallow(<JubilationProvider />).instance().props.theme).toEqual(JubilationTheme);
  });

  it('should use a xDomain of [0, 300] by default', () => {
    expect(shallow(<JubilationProvider />).instance().props.xDomain).toEqual([0, 300]);
  });

  it('should use a yDomain of [100, 0] by default', () => {
    expect(shallow(<JubilationProvider />).instance().props.yDomain).toEqual([100, 0]);
  });

  it('should use a xRange of [0, 300] by default', () => {
    expect(shallow(<JubilationProvider />).instance().props.xRange).toEqual([0, 300]);
  });

  it('should use a yRange of [0, 100] by default', () => {
    expect(shallow(<JubilationProvider />).instance().props.yRange).toEqual([0, 100]);
  });

  it('should use an empty array of children by default', () => {
    expect(shallow(<JubilationProvider />).props().children).toEqual([]);
  });

  it('should set the passed in theme on Jubilation Context', () => {
    expect(shallow(<JubilationProvider theme="test" />).instance().JubilationContext.theme)
      .toBe('test');
  });

  it('should set the theme on Jubilation Context when a new one is passed as a prop', () => {
    const wrapper = shallow(<JubilationProvider />);
    const instance = wrapper.instance();
    wrapper.setProps({ theme: 'test' });
    expect(instance.JubilationContext.theme).toBe('test');
  });

  it('should set the xScale on Jubilation Context when a new xDomain is passed as a prop', () => {
    const wrapper = shallow(<JubilationProvider />);
    const instance = wrapper.instance();
    wrapper.setProps({ xDomain: [1, 2] });
    expect(instance.JubilationContext.xScale(2)).toBe(300);
  });

  it('should set the xScale on Jubilation Context when a new xRange is passed as a prop', () => {
    const wrapper = shallow(<JubilationProvider />);
    const instance = wrapper.instance();
    wrapper.setProps({ xRange: [1, 2] });
    expect(instance.JubilationContext.xScale(300)).toBe(2);
  });

  it('should set the yScale on Jubilation Context when a new yDomain is passed as a prop', () => {
    const wrapper = shallow(<JubilationProvider />);
    const instance = wrapper.instance();
    wrapper.setProps({ yDomain: [1, 2] });
    expect(instance.JubilationContext.yScale(2)).toBe(100);
  });

  it('should set the yScale on Jubilation Context when a new yRange is passed as a prop', () => {
    const wrapper = shallow(<JubilationProvider />);
    const instance = wrapper.instance();
    wrapper.setProps({ yRange: [1, 2] });
    expect(instance.JubilationContext.yScale(100)).toBe(1);
  });

  it('should provide a JubilationContext context attribute equal to this.JubilationContext', () => {
    const instance = shallow(<JubilationProvider />).instance();
    expect(instance.getChildContext().JubilationContext).toEqual(instance.JubilationContext);
  });

  it('should render children', () => {
    expect(shallow(<JubilationProvider><span /></JubilationProvider>).find('span').length).toBe(1);
  });
});
