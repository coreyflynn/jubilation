import React from 'react';
import { shallow, mount } from 'enzyme';
import JubilationPoint from '../../src/jubilation-point';
import JubilationTheme from '../../src/jubilation-theme';
import JubilationProvider from '../../src/jubilation-provider';

describe('JubilationPoint', () => {
  it('should render a SVG circle tag', () => {
    expect(shallow(<JubilationPoint />).find('circle').length).toBe(1);
  });

  it('should render a circle with a r prop of 4 by default', () => {
    expect(shallow(<JubilationPoint />).find('circle').props().r).toBe(4);
  });

  it('should control circle radius through the size prop', () => {
    expect(shallow(<JubilationPoint size={1} />).find('circle').props().r).toBe(1);
  });

  it('should render a circle with a fill prop based on the jubilation theme by default', () => {
    expect(shallow(<JubilationPoint />).find('circle').props().fill)
      .toBe(JubilationTheme.colors[0]);
  });

  it('should render a circle with a fill prop based on the context theme if available', () => {
    const wrapper = mount(
      <JubilationProvider theme={{ colors: ['red'] }}>
        <JubilationPoint />
      </JubilationProvider>
    );
    expect(wrapper.find('circle').props().fill).toBe('red');
  });

  it('should use an identity xScale by default', () => {
    expect(shallow(<JubilationPoint x={10} />).find('circle').props().cx).toBe(10);
  });

  it('should use an identity yScale by default', () => {
    expect(shallow(<JubilationPoint y={10} />).find('circle').props().cy).toBe(10);
  });

  it('should use an xScale from context by if available', () => {
    const wrapper = mount(
      <JubilationProvider xDomain={[1, 10]}>
        <JubilationPoint x={10} />
      </JubilationProvider>
    );
    expect(wrapper.find('circle').props().cx).toBe(300);
  });

  it('should use an yScale from context by if available', () => {
    const wrapper = mount(
      <JubilationProvider yDomain={[1, 10]}>
        <JubilationPoint y={10} />
      </JubilationProvider>
    );
    expect(wrapper.find('circle').props().cy).toBe(100);
  });

  it('should control circle fill through the color prop', () => {
    expect(shallow(<JubilationPoint color="red" />).find('circle').props().fill).toBe('red');
  });

  it('should control circle cx through the x prop', () => {
    expect(shallow(<JubilationPoint x={10} />).find('circle').props().cx).toBe(10);
  });

  it('should control circle cy through the y prop', () => {
    expect(shallow(<JubilationPoint y={10} />).find('circle').props().cy).toBe(10);
  });
});
