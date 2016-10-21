import React from 'react';
import { mount } from 'enzyme';
import XAxis from '../../src/jubilation-axis/x-axis';
import axisTests from './axis-helpers';
import theme from '../../src/jubilation-theme';

describe('JubilationAxis:XAxis', () => {
  axisTests(XAxis, 'middle');

  it('set Label y attributes based on position', () => {
    expect(mount(<XAxis min={0} max={10} position={10} />)
      .find('JubilationLabel').at(0).props().y).toBe(10);
  });

  it('set Label dy attributes based on theme', () => {
    expect(mount(<XAxis min={0} max={10} />)
      .find('JubilationLabel').at(0).props().dy).toBe(theme.labelStyle.fontSize);
  });
});
