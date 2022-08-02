import getCep from '@domain/user/services/helpers/getCep';
import StatusError from '@util/error';
import axios, { Axios } from 'axios';

describe('getCep', () => {
  describe('getCep', () => {
    it('Should not throw error when testing valid postal code', () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ status: 200 });
      expect(() => getCep('')).not.toThrow();
    });
    it('Should throw error when testing invalid code', async () => {
      const mockAxios = jest.spyOn(axios, 'get');
      mockAxios.mockImplementation(() =>
        Promise.reject(new Error('cep invalido ')),
      );
      await expect(() => getCep('')).rejects.toEqual(
        new StatusError(422, 'ValidationError: postal_code is invalid'),
      );
    });
  });
});
