import isCpfValid from './isCpfValid';

describe('isCpfValid', () => {
  describe('isCpfValid', () => {
    it('Should not throw error when validating 123.456.789-09', () => {
      expect(() => isCpfValid('12345678909')).not.toThrow();
    });
    it('Should throw error when validating CPF composed of the same numbers (111.111.111-11)', () => {
      expect(() => isCpfValid('11111111111')).toThrow();
    });
    it('Should throw error when the first validating digit is wrong (123.456.789-19)', () => {
      expect(() => isCpfValid('12345678919')).toThrow();
    });
    it('Should throw error when the second validating digit is wrong (123.456.789-08)', () => {
      expect(() => isCpfValid('12345678908')).toThrow();
    });
  });
});
