import { IUser, IVariableDatabase } from '@interfaces/domain/repository';
import { IUserValidator } from '@interfaces/domain/services/validation';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class UserValidator implements IUserValidator {
  private _getCep: (value: string) => Promise<void>;
  private _isCpfValid: (cpf: string) => void;
  private _checkUnique: (
    value: string,
    fieldName: keyof IUser,
    database: IVariableDatabase,
  ) => void;
  constructor(
    @inject('getCep')
    getCep: (value: string) => Promise<void>,
    @inject('isCpfValid')
    isCpfValid: (cpf: string) => void,
    @inject('checkUnique')
    checkUnique: (
      value: string,
      fieldName: keyof IUser,
      database: IVariableDatabase,
    ) => void,
  ) {
    this._getCep = getCep;
    this._isCpfValid = isCpfValid;
    this._checkUnique = checkUnique;
  }

  public async validate(user: IUser, database: IVariableDatabase) {
    await this._getCep(user.postal_code);
    this._isCpfValid(user.cpf);
    this._checkUnique(user.email, 'email', database);
    this._checkUnique(user.cpf, 'cpf', database);
  }
}
