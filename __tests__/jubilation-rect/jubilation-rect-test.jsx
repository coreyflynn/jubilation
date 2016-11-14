import React from 'react';
import { mount } from 'enzyme';
import JubilationRect from '../../src/jubilation-rect';
import JubilationTheme from '../../src/jubilation-theme';
import JubilationProvider from '../../src/jubilation-provider';

describe('JubilationRect', () => {
  it('should render a SVG rect tag', () => {
    expect(mount(<JubilationRect />).find('rect').length).toBe(1);
  });

  // { x = 0, y = 0, color, style, width = 10, height = 10 }: Props,
  it('should render with a x prop of 0 by default', () => {
    expect(mount(<JubilationRect />).find('rect').props().x).toBe(0);
  });

  it('should render with a y prop of 0 by default', () => {
    expect(mount(<JubilationRect />).find('rect').props().y).toBe(0);
  });

  it('should render with an empty style prop by default', () => {
    expect(mount(<JubilationRect />).find('rect').props().style).toEqual({});
  });

  it('should render with a width prop of 10 by default', () => {
    expect(mount(<JubilationRect />).find('rect').props().width).toBe(10);
  });

  it('should render with a height prop of 10 by default', () => {
    expect(mount(<JubilationRect />).find('rect').props().height).toBe(10);
  });

  it('should render a rect with a fill prop based on the jubilation theme by default', () => {
    expect(mount(<JubilationRect />).find('rect').props().fill)
      .toBe(JubilationTheme.colors[0]);
  });

  it('should render a rect with a fill prop based on the context theme if available', () => {
    const wrapper = mount(
      <JubilationProvider theme={{ colors: ['red'] }}>
        <JubilationRect />
      </JubilationProvider>
    );
    expect(wrapper.find('rect').props().fill).toBe('red');
  });

  it('should use an identity xScale by default', () => {
    expect(mount(<JubilationRect x={10} />).find('rect').props().x).toBe(10);
  });

  it('should use an identity yScale by default', () => {
    expect(mount(<JubilationRect y={10} />).find('rect').props().y).toBe(10);
  });

  it('should use a xScale from context by if available', () => {
    const wrapper = mount(
      <JubilationProvider xDomain={[1, 10]}>
        <JubilationRect x={10} />
      </JubilationProvider>
    );
    expect(wrapper.find('rect').props().x).toBe(300);
  });

  it('should use a yScale from context by if available', () => {
    const wrapper = mount(
      <JubilationProvider yDomain={[2, 10]}>
        <JubilationRect y={2} />
      </JubilationProvider>
    );
    expect(wrapper.find('rect').props().y).toBe(0);
  });

  it('should control circle fill through the color prop', () => {
    expect(mount(<JubilationRect color="red" />).find('rect').props().fill).toBe('red');
  });
});
