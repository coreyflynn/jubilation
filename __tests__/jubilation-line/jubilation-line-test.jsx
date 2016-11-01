import React from 'react';
import { shallow, mount } from 'enzyme';
import JubilationLine from '../../src/jubilation-line';
import JubilationProvider from '../../src/jubilation-provider';

describe('JubilationLine', () => {
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

  it('should use an identity xScale from the default context if one is not given', () => {
    const wrapper = mount(<JubilationLine x1={150} />);

    expect(wrapper.find('line').props().x1).toBe(150);
  });

  it('should use yScale from the default context if one is not given', () => {
    expect(mount(<JubilationLine y2={150}/>).find('line').props().y2).toBe(150);
  });

  it('should calculate xScale from JubilationContext if passed', () => {
    const wrapper = mount(
      <JubilationProvider xDomain={[1, 10]}>
        <JubilationLine x2={10} />
      </JubilationProvider>
    );

    expect(wrapper.find('line').props().x2).toBe(300)
  });

  it('should calculate yScale from JubilationContext if passed', () => {
    const wrapper = mount(
      <JubilationProvider yDomain={[50, 100]}>
        <JubilationLine y1={50} />
      </JubilationProvider>
    );

    expect(wrapper.find('line').props().y1).toBe(0);
  });

  it('should set the stroke color to theme.labelStyle.fill from the default context if one is not given', () => {
    expect(mount(<JubilationLine />).find('line').props().stroke).toBe("#393F46");
  });

  it('should set the stroke color to theme.labelStyle.fill from the if one is passed', () => {
    const wrapper = mount(
      <JubilationProvider theme={{ colors: ['red'] }}>
        <JubilationLine />
      </JubilationProvider>
    );
    expect(wrapper.find('line').props().stroke).toBe('red');
  });
});
