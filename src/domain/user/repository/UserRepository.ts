import AbstractRepository from '@domain/AbstractRepository';
import {
  IRepositoryUser,
  IUser,
  IVariableDatabase,
} from 'interfaces/domain/repository';
import { injectable } from 'tsyringe';

@injectable()
export default class UserRepository
  extends AbstractRepository
  implements IRepositoryUser
{
  getNewIndex(): number {
    const idArray = Array.from(this._database.keys());
    if (idArray.length === 0) {
      return 0;
    }
    return Math.max(...idArray) + 1;
  }

  create(entity: IUser): IUser {
    this._database.set(this.getNewIndex(), entity);
    return entity;
  }

  read(id: number): undefined | IUser {
    return this._database.get(id);
  }

  readAll(): IVariableDatabase {
    return this._database;
  }

  update(id: number, newEntity: IUser): void {
    this._database.set(id, newEntity);
  }

  delete(id: number): void {
    this._database.forEach((value: object, key: number) => {
      if (key === id) {
        this._database.delete(id);
      }
    });
  }
}
