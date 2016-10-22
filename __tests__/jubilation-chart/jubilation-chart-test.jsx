import React from 'react';
import { shallow } from 'enzyme';
import Chart from '../../src/jubilation-chart';
import { getXRange, getYRange } from '../../src/helpers/chart';
import theme from '../../src/jubilation-theme';

describe('JubilationChart', () => {
  it('should render a Provider', () => {
    expect(shallow(<Chart />).find('JubilationProvider').length).toBe(1);
  });

  const providerDefaults = new Map([
    ['xRange', getXRange(300, theme)],
    ['yRange', getYRange(100, theme)],
  ]);

  for (const [k, v] of providerDefaults) {
    it(`should render a Provider with a default ${k} of ${v}`, () => {
      expect(shallow(<Chart />).find('JubilationProvider').props()[k]).toEqual(v);
    });
  }

  it('should render a Container', () => {
    expect(shallow(<Chart />).find('JubilationContainer').length).toBe(1);
  });

  const containerDefaults = new Map([
    ['height', 100],
    ['width', 300],
    ['title', 'JubilationChart'],
  ]);

  for (const [k, v] of containerDefaults) {
    it(`should render a Container with a default ${k} of ${v}`, () => {
      expect(shallow(<Chart />).find('JubilationContainer').props()[k]).toEqual(v);
    });
  }

  it('should render children', () => {
    expect(shallow(<Chart><div className="test" /></Chart>).find('.test').length).toBe(1);
  });
});
