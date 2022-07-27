import calcCpfDigit from './calcCpfDigit';

describe('calcCpfDigit', () => {
  describe('calcCpfDigit', () => {
    it('Should result 0 when calculating 123456789', () => {
      const result = calcCpfDigit([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(result).toBe(0);
    });
  });
});
