import getCep from '@domain/user/services/helpers/getCep';
import StatusError from '@util/error';
import axios, { Axios } from 'axios';

describe('getCep', () => {
  describe('getCep', () => {
    it('Should not throw error when testing valid postal code', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ status: 200 });
      expect(await getCep('')).toBe(true);
    });
    it('Should throw error when testing invalid code', async () => {
      const mockAxios = jest.spyOn(axios, 'get');
      mockAxios.mockImplementation(() =>
        Promise.reject(new Error('cep invalido ')),
      );
      expect(await getCep('')).toBe(false);
    });
  });
});
