import React from 'react';
import { shallow, mount } from 'enzyme';

export default function axisTests(Axis, textAnchor) {
  it('should render an animation component', () => {
    expect(shallow(<Axis />).find('JubilationAnimation').length).toBe(1);
  });

  it('should render a group tag', () => { expect(mount(<Axis />).find('g').length).toBe(1); });

  it('should render a min label', () => {
    expect(mount(<Axis min={0} max={10} />).find('JubilationLabel').at(0).text()).toBe('0');
  });

  it('should render a max label', () => {
    expect(mount(<Axis min={0} max={10} />).find('JubilationLabel').at(1).text()).toBe('10');
  });

  it('should round min label values', () => {
    expect(mount(<Axis min={1.5} max={10} />).find('JubilationLabel').at(0).text()).toBe('2');
  });

  it('should round max label values', () => {
    expect(mount(<Axis min={0} max={10.5} />).find('JubilationLabel').at(1).text()).toBe('11');
  });

  it('should only render two labels by default', () => {
    expect(mount(<Axis min={0} max={10} />).find('JubilationLabel').length).toBe(2);
  });

  it('should only render two ticks by default', () => {
    expect(mount(<Axis min={0} max={10} />).find('JubilationLine').length).toBe(2);
  });

  it('should only render additional labels if numTicks > 0', () => {
    expect(mount(<Axis min={0} max={10} numTicks={1} />).find('JubilationLabel').length).toBe(3);
  });

  it('should only render additional ticks if numTicks > 0', () => {
    expect(mount(<Axis min={0} max={10} numTicks={1} />).find('JubilationLine').length).toBe(3);
  });

  it('should only render a title labels if a title is supplied', () => {
    expect(mount(<Axis min={0} max={10} title="test" />).find('JubilationLabel').length).toBe(3);
  });

  it('should properly calculate additional labels', () => {
    expect(mount(<Axis min={0} max={10} numTicks={1} />)
      .find('JubilationLabel').at(1).text()).toBe('5');
  });

  it('should round additional label values', () => {
    expect(mount(<Axis min={0} max={9} numTicks={1} />)
      .find('JubilationLabel').at(1).text()).toBe('5');
  });

  it(`set min Label textAnchor attribute to ${textAnchor}`, () => {
    expect(mount(<Axis min={0} max={10} />)
      .find('JubilationLabel').at(0).props().textAnchor).toBe(textAnchor);
  });

  it(`set max Label textAnchor attribute to ${textAnchor}`, () => {
    expect(mount(<Axis min={0} max={10} />)
      .find('JubilationLabel').at(1).props().textAnchor).toBe(textAnchor);
  });

  it(`set additional Label textAnchor attributes to ${textAnchor}`, () => {
    expect(mount(<Axis min={0} max={10} numTicks={1} />)
      .find('JubilationLabel').at(1).props().textAnchor).toBe(textAnchor);
  });
}
