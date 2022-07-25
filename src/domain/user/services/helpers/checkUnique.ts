import { IUser, IVariableDatabase } from '@interfaces/domain/repository';
import StatusError from '@util/error';

export const checkUnique = (
  field: string,
  fieldName: keyof IUser,
  database: IVariableDatabase,
): void => {
  const usersArray = Array.from(database.values());
  usersArray.map((value: IUser) => {
    if (value[fieldName] === field) {
      throw new StatusError(422, `${fieldName} ${field} já existe`);
    }
  });
};

export default checkUnique;
