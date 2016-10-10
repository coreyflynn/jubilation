/**
 * This set of tests is meant to ensure that any newly constructed themes adhere to the
 * expected theme format. Add themes to the themesToTest array and all tests will be run
 * against them.
 */
import JubilationTheme from '../../src/jubilation-theme';

const themesToTest = [JubilationTheme];

themesToTest.forEach((theme) => {
  describe(`Theme: ${theme.name}`, () => {
    it('should have a string name', () => {
      expect(typeof theme.name).toBe('string');
    });

    it('should have a string axis color', () => {
      expect(typeof theme.axisColor).toBe('string');
    });

    it('should have an array colors', () => {
      expect(theme.colors instanceof Array).toBe(true);
    });
    
  });
});
