import React from 'react';
import * as d3Ease from 'd3-ease';
import { shallow, mount } from 'enzyme';
import JubilationAnimation from '../../src/jubilation-animation';

function childFn() { return <div />; }

const defaultProps = { duration: 300, delay: 0, easing: 'easeQuadInOut', data: {} };

function getWrapper(props = {}, child = childFn, shouldMount = false) {
  if (shouldMount) return mount(<JubilationAnimation {...props}>{child}</JubilationAnimation>);
  return shallow(<JubilationAnimation {...props}>{child}</JubilationAnimation>);
}

function mockPrototypeMethod(method) {
  global[method] = JubilationAnimation.prototype[method];
  JubilationAnimation.prototype[method] = jest.fn();
}

function restorePrototypeMethod(method) { JubilationAnimation.prototype[method] = global[method]; }

describe('JubilationAnimation', () => {
  it('should call a child function', () => {
    const child = jest.fn(childFn);
    getWrapper({}, child);
    expect(child).toHaveBeenCalled();
  });

  Object.keys(defaultProps).forEach((prop) => {
    it(`should have a default ${prop} of ${defaultProps[prop]}`, () => {
      expect(getWrapper().instance().props[prop]).toEqual(defaultProps[prop]);
    });
  });

  it('should set up a default easing function', () => {
    expect(getWrapper().instance().ease).toEqual(d3Ease[defaultProps.easing]);
  });

  it('should control the easing function through an easing Prop', () => {
    expect(getWrapper({ easing: 'easeLinear' }).instance().ease).toEqual(d3Ease.easeLinear);
  });

  it('should set up an empty queue by default', () => {
    expect(getWrapper().instance().queue).toEqual([]);
  });

  it('should fill the queue with the tail of an array passed to the data prop', () => {
    expect(getWrapper({ data: [1, 2] }).instance().queue).toEqual([2]);
  });

  it('should set up an empty data state object by default', () => {
    expect(getWrapper().instance().state.data).toEqual({});
  });

  it('should set up a data state with a passed in data object', () => {
    expect(getWrapper({ data: { test: 1 } }).instance().state.data).toEqual({ test: 1 });
  });

  it('should set up a data state with the head of a passed in data array', () => {
    expect(getWrapper({ data: [{ test: 1 }] }).instance().state.data).toEqual({ test: 1 });
  });

  it('should set up an animating state of false by default', () => {
    expect(getWrapper().instance().state.animating).toBe(false);
  });

  describe('componentDidMount', () => {
    beforeAll(() => { mockPrototypeMethod('traverseQueue'); });

    afterAll(() => { restorePrototypeMethod('traverseQueue'); });

    it('should start traversing the queue on mount if it has content', () => {
      const instance = getWrapper({ data: [1, 2] }, childFn, true).instance();
      expect(instance.traverseQueue).toHaveBeenCalled();
    });
  });

  describe('componentWillRecieveProps', () => {
    beforeAll(() => { mockPrototypeMethod('traverseQueue'); });

    afterAll(() => { restorePrototypeMethod('traverseQueue'); });

    it('should stop a timer if there is one', () => {
      const wrapper = getWrapper();
      const instance = wrapper.instance();
      instance.timer = { stop: jest.fn() };
      wrapper.setProps({ data: 'test' });
      expect(instance.timer.stop).toHaveBeenCalled();
    });

    it('should reset the queue if the new data prop is an object', () => {
      const wrapper = getWrapper();
      const instance = wrapper.instance();
      wrapper.setProps({ data: { test: 'test' } });
      expect(instance.queue).toEqual([{ test: 'test' }]);
    });

    it('should add to the queue if the new data prop is an array', () => {
      const wrapper = getWrapper();
      const instance = wrapper.instance();
      wrapper.setProps({ data: [{ test: 'test' }, { test: 'test' }] });
      expect(instance.queue).toEqual([{ test: 'test' }, { test: 'test' }]);
    });

    it('should call traverse queue', () => {
      const wrapper = getWrapper();
      const instance = wrapper.instance();
      wrapper.setProps({ data: {} });
      expect(instance.traverseQueue).toHaveBeenCalled();
    });
  });

  describe('componentWillUnmount', () => {
    it('should stop a timer if there is one', () => {
      const wrapper = getWrapper({}, childFn, true);
      const instance = wrapper.instance();
      instance.timer = { stop: jest.fn() };
      wrapper.unmount();
      expect(instance.timer.stop).toHaveBeenCalled();
    });
  });

  describe('traverseQueue', () => {
    it('should set up an interpolator if there is a queue', () => {
      const instance = getWrapper({ data: [{ x: 1 }, { x: 2 }] }, childFn, true).instance();
      expect(instance.interpolator(1).x).toBe(2);
    });

    it('should set up a timer if there is a queue', () => {
      const instance = getWrapper({ data: [{ x: 1 }, { x: 2 }] }, childFn, true).instance();
      expect(instance.timer).toBeTruthy();
    });
  });
});
