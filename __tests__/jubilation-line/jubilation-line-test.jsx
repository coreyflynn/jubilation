import React from 'react';
import { shallow, mount } from 'enzyme';
import JubilationLine from '../../src/jubilation-line';
import JubilationProvider from '../../src/jubilation-provider';

describe('JubilationLine', () => {
  it.skip('should expect x1, y1, x2, y2 props', () => {
    // TODO spy on console.log to check for React warning message
    // expect(mount(<JubilationLine />).find('line').props().r).toBe(4);
  });

  it('should render an SVG line tag', () => {
    expect(mount(<JubilationLine />).find('line').length).toBe(1);
  });

  it('should render an animation component', () => {
    expect(shallow(<JubilationLine />).find('JubilationAnimation').length).toBe(1);
  });

  it('should render x1, y1, x2, y2 props on the SVG line', () => {
    const props = { x1: 1, y1: 1, x2: 2, y2: 2 };
    const wrapper = mount(<JubilationLine {...props} />);

    expect(wrapper.props('x1')).toBe(1);
    expect(wrapper.props('y1')).toBe(1);
    expect(wrapper.props('x2')).toBe(2);
    expect(wrapper.props('y2')).toBe(2);
  });

  it('passes additional props through to the rendered lines', () => {
    expect(mount(<JubilationLine className={'test'} />).props().className).toBe('test');
  });

  it.skip('should use xScale and yScale from the default context if one is not given', () => {
    expect(mount(<JubilationLine />).find('line').props().r).toBe(1);
  });

  it.skip('should use yScale from the default context if one is not given', () => {
    expect(mount(<JubilationLine />).find('line').props().r).toBe(1);
  });

  it.skip('should use a xScale from passed context if available', () => {
    expect(mount(<JubilationLine />).find('line').props().r).toBe(1);
  });

  it.skip('should extract yScale if JubilationContext is passed', () => {
    expect(mount(<JubilationLine />).find('line').props().r).toBe(1);
  });

  it.skip('should set the stroke color to theme.labelStyle.fill from the default context if one is not given', () => {
    expect(mount(<JubilationLine />).find('line').props().stroke).toBe(1);
  });

  it.skip('should set the stroke color to theme.labelStyle.fill from the if one is passed', () => {
    const wrapper = mount(
      <JubilationProvider theme={{ colors: ['red'] }}>
        <JubilationLine />
      </JubilationProvider>
    );
    expect(wrapper.find('line').props().stroke).toBe('red');
  });
});
