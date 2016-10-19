import getDomainMap from '../../src/helpers/scatter';

function getData() {
  return [{ x: Math.random(), y: Math.random() }, { x: Math.random(), y: Math.random() }];
}

describe('Helpers:Scatter', () => {
  describe('getDomainMap', () => {
    it('should produce an object with the right id key', () => {
      expect(getDomainMap('test', getData()).test).toBeDefined();
    });

    it('should produce an object with the right x min', () => {
      const data = getData();
      const min = data[0].x < data[1].x ? data[0].x : data[1].x;
      expect(getDomainMap('test', data).test.x[0]).toBe(min);
    });

    it('should produce an object with the right x max', () => {
      const data = getData();
      const max = data[0].x > data[1].x ? data[0].x : data[1].x;
      expect(getDomainMap('test', data).test.x[1]).toBe(max);
    });

    it('should produce an object with the right y min', () => {
      const data = getData();
      const min = data[0].y > data[1].y ? data[0].y : data[1].y;
      expect(getDomainMap('test', data).test.y[0]).toBe(min);
    });

    it('should produce an object with the right y max', () => {
      const data = getData();
      const max = data[0].y < data[1].y ? data[0].y : data[1].y;
      expect(getDomainMap('test', data).test.y[1]).toBe(max);
    });
  });
});
