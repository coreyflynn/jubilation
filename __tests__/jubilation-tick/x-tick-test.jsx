import React from 'react';
import { mount } from 'enzyme';
import { XTick } from '../../src/jubilation-tick';
import JubilationLine from '../../src/jubilation-line';
import getContext from '../../src/helpers/context';

function lineLength(line: JubilationLine): number {
  return Math.sqrt(
    Math.pow(line.prop('x2') - line.prop('x1'), 2) +
    Math.pow(line.prop('y2') - line.prop('y1'), 2)
  )
}

describe.only('XTick', () => {
  const context = getContext();
  const { theme, yScale } = context;

  it('should set default tick height based on theme', () => {
    const tick = mount(<XTick position={0} context={context} />).find('JubilationLine');

    // 3.5 === theme.labelStyle.fontSize / 4 for default theme
    expect(lineLength(tick)).toEqual(3.5);
  });

  it('should set extended tick height based on chart size', () => {
    const tick = mount(<XTick position={0} context={context} extended />).find('JubilationLine');

    // 100 is the default domain for Y
    // 3.5 === theme.labelStyle.fontSize / 4 for default theme
    expect(lineLength(tick)).toEqual(100 - 3.5);
  });
});
