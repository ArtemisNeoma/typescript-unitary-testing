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
  public getNewIndex(): number {
    const idArray = Array.from(this._database.keys());
    if (idArray.length === 0) {
      return 0;
    }
    return Math.max(...idArray) + 1;
  }

  public create(entity: IUser): IUser {
    this._database.set(this.getNewIndex(), entity);
    return entity;
  }

  public read(id: number): undefined | IUser {
    return this._database.get(id);
  }

  public readAll(): IVariableDatabase {
    return this._database;
  }

  public update(id: number, newEntity: IUser): void {
    this._database.set(id, newEntity);
  }

  public delete(id: number): void {
    this._database.forEach((value: object, key: number) => {
      if (key === id) {
        this._database.delete(id);
      }
    });
  }
}
