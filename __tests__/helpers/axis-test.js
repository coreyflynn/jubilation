import getTicks from '../../src/helpers/axis';
import { default as theme } from '../../src/jubilation-theme';

describe('Helpers:Axis', () => {
  describe('getTicks', () => {
    it('should return an empty array if numTicks is 0', () => {
      expect(getTicks({
        axisType: 'x',
        min: 0,
        max: 10,
        position: 0,
        numTicks: 0,
        context: { theme },
      })).toEqual([]);

      it('should return and properly compute tick vals', () => {
        expect(getTicks({
          axisType: 'y',
          min: 0,
          max: 10,
          position: 0,
          numTicks: 0,
          context: { theme },
        })[0].val).toBe(5);
      });

      describe('for an XAxis', () => {
        const xAxisTicks = {
          axisType: 'x',
          min: 0,
          max: 10,
          numTicks: 1,
          position: 0,
          context: { theme },
        };

        it('should return an x of val', () => {
          expect(getTicks(xAxisTicks)[0].x).toBe(5);
        });

        it('should return an y of position', () => {
          expect(getTicks(xAxisTicks)[0].y).toBe(0);
        });

        it('should return a textAnchor of middle', () => {
          expect(getTicks(xAxisTicks)[0].textAnchor).toBe('middle');
        });

        it('should return a dy of the theme font size', () => {
          expect(getTicks(xAxisTicks)[0].dy).toBe(theme.labelStyle.fontSize);
        });

        it('should return a dx of 0', () => {
          expect(getTicks(xAxisTicks)[0].dx).toBe(0);
        });
      });

      describe('for a YAxis', () => {
        const yAxisTicks = {
          axisType: 'x',
          min: 0,
          max: 10,
          numTicks: 1,
          position: 0,
          context: { theme },
        };

        it('should return an x of position', () => {
          expect(getTicks(yAxisTicks)[0].x).toBe(0);
        });

        it('should return an y of val', () => {
          expect(getTicks(yAxisTicks)[0].y).toBe(5);
        });

        it('should return a textAnchor of end', () => {
          expect(getTicks(yAxisTicks)[0].textAnchor).toBe('end');
        });

        it('should return a dy of 0', () => {
          expect(getTicks(yAxisTicks)[0].dy).toBe(0);
        });

        it('should return a dx of -5', () => {
          expect(getTicks(yAxisTicks)[0].dx).toBe(-5);
        });
      });
    });
  });
});
