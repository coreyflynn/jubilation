import { getXRange, getYRange } from '../../src/helpers/chart';

const theme = { margin: { right: 10, left: 20, top: 30, bottom: 40 } };

describe('Helpers:Chart', () => {
  describe('getXRange', () => {
    it('should return a range min taking left margin into acount', () => {
      expect(getXRange(100, theme)[0]).toBe(20);
    });

    it('should return a range max taking width and right margin into acount', () => {
      expect(getXRange(100, theme)[1]).toBe(90);
    });
  });

  describe('getYRange', () => {
    it('should return a range min taking top margin into acount', () => {
      expect(getYRange(100, theme)[0]).toBe(30);
    });

    it('should return a range max taking height and bottom margin into acount', () => {
      expect(getYRange(100, theme)[1]).toBe(60);
    });
  });
});
