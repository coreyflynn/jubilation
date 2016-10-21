import React from 'react';
import { mount } from 'enzyme';
import YAxis from '../../src/jubilation-axis/y-axis';
import axisTests from './axis-helpers';

describe('JubilationAxis:YAxis', () => {
  axisTests(YAxis, 'end');

  it('set Label x attributes based on position', () => {
    expect(mount(<YAxis min={0} max={10} position={10} />)
      .find('JubilationLabel').at(0).props().x).toBe(10);
  });

  it('set Label dx attributes to -5', () => {
    expect(mount(<YAxis min={0} max={10} />).find('JubilationLabel').at(0).props().dx).toBe(-5);
  });
});
