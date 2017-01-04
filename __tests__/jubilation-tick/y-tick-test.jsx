import React from 'react';
import { mount } from 'enzyme';
import { YTick } from '../../src/jubilation-tick';
import JubilationLine from '../../src/jubilation-line';
import getContext from '../../src/helpers/context';

function lineLength(line: JubilationLine): number {
  return Math.sqrt(
    Math.pow(line.prop('x2') - line.prop('x1'), 2) +
    Math.pow(line.prop('y2') - line.prop('y1'), 2)
  )
}

describe.only('YTick', () => {
  const context = getContext();

  it('should set default tick width of 0', () => {
    const tick = mount(<YTick position={0} context={context} />).find('JubilationLine');

    // Default Y-tick is length 0
    expect(lineLength(tick)).toEqual(0);
  });

  it('should set tick length based on dx', () => {
    const tick = mount(<YTick position={0} dx={-2.5} context={context} />).find('JubilationLine');

    expect(lineLength(tick)).toEqual(2.5);
  });

  it('should set extended tick length based on chart size', () => {
    const tick = mount(<YTick position={0} context={context} extended />).find('JubilationLine');

    // 100 is the default domain for X
    expect(lineLength(tick)).toEqual(100);
  });
});
