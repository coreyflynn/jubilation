import getTextWidth from '../../src/helpers/text';

describe('Helpers:Text', () => {
  describe('getTextWidth', () => {
    it('should default to using fontSize', () => {
      expect(getTextWidth('test')).toBe(56);
    });
  });
});
