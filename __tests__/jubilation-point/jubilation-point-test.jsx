import React from 'react';
import { shallow } from 'enzyme';
import JubilationPoint from '../../src/jubilation-point';
import JubilationTheme from '../../src/jubilation-theme';

describe('JubilationPoint', () => {
  it('should render a SVG circle tag', () => {
    expect(shallow(<JubilationPoint />).find('circle').length).toBe(1);
  });

  it('should render a circle with a r prop of 10 by default', () => {
    expect(shallow(<JubilationPoint />).find('circle').props().r).toBe(10);
  });

  it('should control circle radius through the size prop', () => {
    expect(shallow(<JubilationPoint size={1} />).find('circle').props().r).toBe(1);
  });

  it('should render a circle with a fill prop of based on the default theme by default', () => {
    expect(shallow(<JubilationPoint />).find('circle').props().fill)
      .toBe(JubilationTheme.colors[0]);
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
