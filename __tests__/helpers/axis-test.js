import getTicks from '../../src/helpers/axis';
import { default as theme } from '../../src/jubilation-theme';

const context = { theme };

describe('Helpers:Axis', () => {
  describe('getTicks', () => {
    it('should return an empty array if numTicks is 0', () => {
      expect(getTicks(0, 10, 0, 'x', 0, context)).toEqual([]);
    });

    it('should return an properly compute tick vals', () => {
      expect(getTicks(0, 10, 1, 'x', 0, context)[0].val).toBe(5);
    });

    it('should return an x of val if axisType is x', () => {
      expect(getTicks(0, 10, 1, 'x', 0, context)[0].x).toBe(5);
    });

    it('should return an x of position if axisType is y', () => {
      expect(getTicks(0, 10, 1, 'y', 0, context)[0].x).toBe(0);
    });

    it('should return an y of val if axisType is y', () => {
      expect(getTicks(0, 10, 1, 'y', 0, context)[0].y).toBe(5);
    });

    it('should return an y of position if axisType is x', () => {
      expect(getTicks(0, 10, 1, 'x', 0, context)[0].y).toBe(0);
    });

    it('should return a textAnchor of middle if axisType is x', () => {
      expect(getTicks(0, 10, 1, 'x', 0, context)[0].textAnchor).toBe('middle');
    });

    it('should return a textAnchor of end if axisType is x', () => {
      expect(getTicks(0, 10, 1, 'y', 0, context)[0].textAnchor).toBe('end');
    });

    it('should return a dy of the theme font size if the axis type is x', () => {
      expect(getTicks(0, 10, 1, 'x', 0, context)[0].dy).toBe(context.theme.labelStyle.fontSize);
    });

    it('should return a dy of 0 if the axis type is y', () => {
      expect(getTicks(0, 10, 1, 'y', 0, context)[0].dy).toBe(0);
    });

    it('should return a dx of 0 if the axis type is x', () => {
      expect(getTicks(0, 10, 1, 'x', 0, context)[0].dx).toBe(0);
    });

    it('should return a dx of -5 if the axis type is y', () => {
      expect(getTicks(0, 10, 1, 'y', 0, context)[0].dx).toBe(-5);
    });
  });
});
