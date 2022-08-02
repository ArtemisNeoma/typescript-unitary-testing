import { IUser, IVariableDatabase } from '@interfaces/domain/repository';
import checkUnique from './checkUnique';

const mockDatabase: IVariableDatabase = new Map<number, IUser>();
const mockUser: IUser = {} as IUser;

beforeAll(() => {
  mockUser.email = 'test@test.com.br';
});

describe('checkUnique', () => {
  describe('checkUnique', () => {
    it('Should return true when checking a unique item', () => {
      expect(checkUnique(mockUser.email, 'email', mockDatabase)).toBe(true);
    });
    it('Should throw error when checking an already existing item', () => {
      mockDatabase.set(0, mockUser);
      expect(checkUnique(mockUser.email, 'email', mockDatabase)).toBe(false);
    });
  });
});
