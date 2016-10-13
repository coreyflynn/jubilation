import React from 'react';
import { shallow } from 'enzyme';
import { default as JubilationTheme } from '../../src/jubilation-theme';
import JubilationProvider from '../../src/jubilation-provider';

describe('JubilationProvider', () => {
  it('should use the JubilationTheme by default', () => {
    expect(shallow(<JubilationProvider />).instance().props.theme).toEqual(JubilationTheme);
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

  it('should provide a JubilationContext context attribute equal to this.JubilationContext', () => {
    const instance = shallow(<JubilationProvider />).instance();
    expect(instance.getChildContext().JubilationContext).toEqual(instance.JubilationContext);
  });

  it('should render children', () => {
    expect(shallow(<JubilationProvider><span /></JubilationProvider>).find('span').length).toBe(1);
  });
});
