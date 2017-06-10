import { sortByX, toPairs } from '../../src/helpers/line-chart';

describe('Helpers:LineChart', () => {
  describe('toPairs', () => {
    it('should pair each element with its successor', () => {
      const testData = [1, 2, 3, 4, 5];

      const expected = [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
      ];

      expect(toPairs(testData)).toEqual(expected);
    });
  });

  describe('sortByX', () => {
    it('should sort an array of points by their X coordinate', () => {
      const testData = [
        { x: 2, y: 100 },
        { x: 1, y: 500 },
        { x: 100, y: 10 },
      ];

      const expected = [
        { x: 1, y: 500 },
        { x: 2, y: 100 },
        { x: 100, y: 10 },
      ];

      expect(sortByX(testData)).toEqual(expected);
    });

    it('should handle an empty array', () => {
      expect(sortByX([])).toEqual([]);
    });
  });
});
