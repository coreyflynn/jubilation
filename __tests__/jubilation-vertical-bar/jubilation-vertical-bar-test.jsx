import React from 'react';
import { shallow } from 'enzyme';
import { defaultContext } from '../../src/helpers/context';
import VerticalBar from '../../src/jubilation-vertical-bar';


describe('JubilationVerticalBarChart', () => {
  it('should have a default data prop of []', () => {
    expect(shallow(<VerticalBar />).instance().props.data).toEqual([]);
  });

  it('should have a default gapWidth prop of 0.05', () => {
    expect(shallow(<VerticalBar />).instance().props.gapWidth).toBe(0.05);
  });

  it('should set a uuid attribute', () => {
    const re = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
    const uuid = shallow(<VerticalBar />).instance().uuid;
    expect(re.test(uuid)).toBe(true);
  });

  it('should add data as y data to the domain map', () => {
    const { domainMap, uuid } = shallow(<VerticalBar data={[1, 2]} />).instance();
    expect(domainMap[uuid].y).toEqual([2, 1]);
  });

  it('should add dummy x data to the domain map', () => {
    const { domainMap, uuid } = shallow(<VerticalBar data={[1, 2]} />).instance();
    expect(domainMap[uuid].x).toEqual([0, 0]);
  });

  it('shoud default to the base Jubilation context', () => {
    const instance = shallow(<VerticalBar />).instance();
    expect(instance.context.JubilationContext).toEqual(defaultContext);
  });

  describe('ComponentWillReceiveProps', () => {
    it('should add data as y data to the domain map', () => {
      const wrapper = shallow(<VerticalBar data={[1, 2]} />);
      const { domainMap, uuid } = wrapper.setProps({ data: [3, 4] }).instance();
      expect(domainMap[uuid].y).toEqual([4, 3]);
    });

    it('should add dummy x data to the domain map', () => {
      const wrapper = shallow(<VerticalBar data={[1, 2]} />);
      const { domainMap, uuid } = wrapper.setProps({ data: [3, 4] }).instance();
      expect(domainMap[uuid].x).toEqual([0, 0]);
    });
  });

  describe('getWidth', () => {
    it('should compute a width that takes gapWidth into account', () => {
      const instance = shallow(<VerticalBar data={[1]} />).instance();
      // the default chart width from context is 100px and the default gapWidth is
      // 0.05 (5%). Therefore we expect the height for a single bar to be 270px (300px - 5% - 5%)
      expect(instance.getWidth()).toBe(270);
    });
  });

  describe('getBinWidth', () => {
    it('should compute a binWidth of the full xScale range for one data point', () => {
      const instance = shallow(<VerticalBar data={[1]} />).instance();
      expect(instance.getBinWidth()).toBe(300);
    });

    it('should compute a binWidth that takes the number of data into account', () => {
      const instance = shallow(<VerticalBar data={[1, 2]} />).instance();
      expect(instance.getBinWidth()).toBe(150);
    });
  });

  describe('getDataBinSize', () => {
    it('should compute a dataBinSize of the full xScale domain for one data point', () => {
      const instance = shallow(<VerticalBar data={[1]} />).instance();
      expect(instance.getDataBinSize()).toBe(300);
    });

    it('should compute a dataBinSize that takes the number of data into account', () => {
      const instance = shallow(<VerticalBar data={[1, 2]} />).instance();
      expect(instance.getDataBinSize()).toBe(150);
    });
  });

  describe('get label position', () => {
    it('should return an the right label postion data for a single data point', () => {
      const instance = shallow(<VerticalBar data={[1]} />).instance();
      const positions = instance.getLabelPositions();
      expect(positions[0].val).toBe(150);
    });

    it('should return an the right label postion data for a multiple data points', () => {
      const instance = shallow(<VerticalBar data={[1, 2]} />).instance();
      const positions = instance.getLabelPositions();
      expect(positions.map(p => Math.round(p.val))).toEqual([100, 200]);
    });
  });

  describe('render', () => {
    it('should render a Rect for every data point', () => {
      const wrapper = shallow(<VerticalBar data={[1, 2]} />);
      expect(wrapper.find('JubilationRect').length).toBe(2);
    });

    it('should render fewer labels than data points if not enough are passed in', () => {
      const wrapper = shallow(<VerticalBar data={[1, 2]} labels={['one']} />);
      expect(wrapper.find('JubilationLabel').length).toBe(1);
    });

    it('should render a Label for labels passed in if there are matching data', () => {
      const wrapper = shallow(<VerticalBar data={[1, 2]} labels={['one', 'two', 'three']} />);
      expect(wrapper.find('JubilationLabel').length).toBe(2);
    });
  });
});
