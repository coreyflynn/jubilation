import React from 'react';
import { shallow } from 'enzyme';
import JubilationContainer from '../../src/jubilation-container';

describe('JubilationContainer', () => {
  it('should render an SVG tag', () => {
    expect(shallow(<JubilationContainer />).find('svg').length).toBe(1);
  });

  it('should set height by default', () => {
    const props = shallow(<JubilationContainer />).find('svg').props();
    expect(props.height).toBe(100);
  });

  it('should set height by prop', () => {
    const props = shallow(<JubilationContainer height={10} />).find('svg').props();
    expect(props.height).toBe(10);
  });

  it('should set width by default', () => {
    const props = shallow(<JubilationContainer />).find('svg').props();
    expect(props.width).toBe(300);
  });

  it('should set width by prop', () => {
    const props = shallow(<JubilationContainer width={30} />).find('svg').props();
    expect(props.width).toBe(30);
  });

  it('should render children', () => {
    expect(shallow(<JubilationContainer><div /></JubilationContainer>).find('div').length)
      .toBe(1);
  });

  it('should have an aria-labeledby prop', () => {
    const props = shallow(<JubilationContainer />).find('svg').props();
    expect(props['aria-labelledby']).toBe('title desc');
  });

  it('should have a role prop', () => {
    const props = shallow(<JubilationContainer />).find('svg').props();
    expect(props.role).toBe('img');
  });

  it('should set a title by default', () => {
    expect(shallow(<JubilationContainer />).find('title').text()).toBe('JubilationChart');
  });

  it('should set a title by prop', () => {
    expect(shallow(<JubilationContainer title="test" />).find('title').text())
      .toBe('test');
  });

  it('should set a desc by default', () => {
    expect(shallow(<JubilationContainer />).find('desc').text()).toBe('JubilationChart');
  });

  it('should set a desc by prop', () => {
    expect(shallow(<JubilationContainer desc="test" />).find('desc').text())
      .toBe('test');
  });
});
