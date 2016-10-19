import getContext from '../../src/helpers/context';
import JubilationTheme from '../../src/jubilation-theme';

describe('Helpers:Context', () => {
  describe('getContext', () => {
    it('should return passed in context if it exists', () => {
      expect(getContext('test')).toBe('test');
    });

    it('should return a default theme of JubilationTheme', () => {
      expect(getContext().theme).toEqual(JubilationTheme);
    });

    ['xScale', 'yScale'].forEach((attr) => {
      it(`should return a default ${attr} of the identity function`, () => {
        expect(getContext()[attr](1)).toBe(1);
      });
    });

    ['addDomain', 'removeDomain', 'update'].forEach((attr) => {
      it(`should return a default ${attr} of the empty function`, () => {
        expect(getContext()[attr]()).toBe(undefined);
      });
    });
  });
});
