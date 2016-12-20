import React from 'react';
import { shallow } from 'enzyme';
import { defaultContext } from '../../src/helpers/context';
import HorizontalBar from '../../src/jubilation-horizontal-bar';


describe('JubilationHorizontalBarChart', () => {
  it('should have a default data prop of []', () => {
    expect(shallow(<HorizontalBar />).instance().props.data).toEqual([]);
  });

  it('should have a default gapWidth prop of 0.05', () => {
    expect(shallow(<HorizontalBar />).instance().props.gapWidth).toBe(0.05);
  });

  it('should set a uuid attribute', () => {
    const re = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
    const uuid = shallow(<HorizontalBar />).instance().uuid;
    expect(re.test(uuid)).toBe(true);
  });

  it('should add data as x data to the domain map', () => {
    const { domainMap, uuid } = shallow(<HorizontalBar data={[1, 2]} />).instance();
    expect(domainMap[uuid].x).toEqual([1, 2]);
  });

  it('should add dummy y data to the domain map', () => {
    const { domainMap, uuid } = shallow(<HorizontalBar data={[1, 2]} />).instance();
    expect(domainMap[uuid].y).toEqual([0, 0]);
  });

  it('shoud default to the base Jubilation context', () => {
    const instance = shallow(<HorizontalBar />).instance();
    expect(instance.context.JubilationContext).toEqual(defaultContext);
  });

  describe('ComponentWillRecieveProps', () => {
    it('should add data as x data to the domain map', () => {
      const wrapper = shallow(<HorizontalBar data={[1, 2]} />);
      const { domainMap, uuid } = wrapper.setProps({ data: [3, 4] }).instance();
      expect(domainMap[uuid].x).toEqual([3, 4]);
    });

    it('should add dummy y data to the domain map', () => {
      const wrapper = shallow(<HorizontalBar data={[1, 2]} />);
      const { domainMap, uuid } = wrapper.setProps({ data: [3, 4] }).instance();
      expect(domainMap[uuid].y).toEqual([0, 0]);
    });
  });

  describe('getHeight', () => {
    it('should compute a height that takes gapWidth into account', () => {
      const instance = shallow(<HorizontalBar data={[1]} />).instance();
      expect(instance.getHeight()).toBe(90);
    });
  });

  describe('getBinHeight', () => {
    it('should compute a binHeight of the full yScale range for one data point', () => {
      const instance = shallow(<HorizontalBar data={[1]} />).instance();
      expect(instance.getBinHeight()).toBe(100);
    });

    it('should compute a binHeight that takes the number of data into account', () => {
      const instance = shallow(<HorizontalBar data={[1, 2]} />).instance();
      expect(instance.getBinHeight()).toBe(50);
    });
  });

  describe('getDataBinSize', () => {
    it('should compute a dataBinSize of the full yScale domain for one data point', () => {
      const instance = shallow(<HorizontalBar data={[1]} />).instance();
      expect(instance.getDataBinSize()).toBe(100);
    });

    it('should compute a dataBinSize that takes the number of data into account', () => {
      const instance = shallow(<HorizontalBar data={[1, 2]} />).instance();
      expect(instance.getDataBinSize()).toBe(50);
    });
  });

  describe('getY', () => {
    it('should compoute the right offset for a single data point', () => {
      const instance = shallow(<HorizontalBar data={[1]} />).instance();
      expect(instance.getY(0)).toBe(95);
    });

    it('should compoute the right offset for a multiple data points', () => {
      const instance = shallow(<HorizontalBar data={[1, 2]} />).instance();
      expect(instance.getY(0)).toBe(47.5);
      expect(instance.getY(1)).toBe(97.5);
    });
  });

  describe('get label position', () => {
    it('should return an the right label postion data for a single data point', () => {
      const instance = shallow(<HorizontalBar data={[1]} />).instance();
      const positions = instance.getLabelPositions();
      expect(positions[0].val).toBe(50);
    });

    it('should return an the right label postion data for a multiple data points', () => {
      const instance = shallow(<HorizontalBar data={[1, 2]} />).instance();
      const positions = instance.getLabelPositions();
      expect(positions.map(p => Math.round(p.val))).toEqual([33, 67]);
    });
  });

  describe('render', () => {
    it('should render a Rect for every data point', () => {
      const wrapper = shallow(<HorizontalBar data={[1, 2]} />);
      expect(wrapper.find('JubilationRect').length).toBe(2);
    });

    it('should render fewer labels than data points if not enough are passed in', () => {
      const wrapper = shallow(<HorizontalBar data={[1, 2]} labels={['one']} />);
      expect(wrapper.find('JubilationLabel').length).toBe(1);
    });

    it('should render a Label for labels passed in if there are matching data', () => {
      const wrapper = shallow(<HorizontalBar data={[1, 2]} labels={['one', 'two', 'three']} />);
      expect(wrapper.find('JubilationLabel').length).toBe(2);
    });
  });
});
