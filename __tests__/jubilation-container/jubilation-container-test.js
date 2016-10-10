import React from 'react';
import { shallow } from 'enzyme';
import JubilationContainer from '../../src/jubilation-container';

it('should render an SVG tag', () => {
  expect(shallow(<JubilationContainer />).find('svg').length).toBe(1);
});
