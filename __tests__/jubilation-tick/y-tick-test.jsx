import React from 'react';
import { mount } from 'enzyme';
import { YTick } from '../../src/jubilation-tick';
import getContext from '../../src/helpers/context';

function lineLength(line) {
  return Math.sqrt(
    Math.pow(line.prop('x2') - line.prop('x1'), 2) +
    Math.pow(line.prop('y2') - line.prop('y1'), 2)
  );
}

describe.only('YTick', () => {
  const context = getContext();

  it('should set default tick style of "short"', () => {
    const tick = mount(<YTick position={0} context={context} />).find('JubilationLine');

    // Default Y-tick is length 0
    expect(lineLength(tick)).toEqual(0);
  });

  it('should set "short" tick length based on dx', () => {
    const tick = mount(<YTick position={0} dx={5} context={context} tickType={'short'} />).find('JubilationLine');

    expect(lineLength(tick)).toEqual(2.5);
  });

  it('should set "full" tick length based on chart size and dx', () => {
    const tick = mount(<YTick position={0} context={context} tickType={'full'} />).find('JubilationLine');

    // 300 is the default domain for X
    expect(lineLength(tick)).toEqual(300);
  });
});
