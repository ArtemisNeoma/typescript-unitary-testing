import {
  IEndPointsRepository,
  IUser,
  IVariableDatabase,
} from 'interfaces/domain/repository';

export default abstract class AbstractRepository
  implements IEndPointsRepository
{
  protected _database: IVariableDatabase = new Map<number, IUser>();
  abstract create(entity: object): void;
  abstract read(id: number): object | undefined;
  abstract readAll(): IVariableDatabase;
  abstract update(id: number, newEntity: object): void;
  abstract delete(id: number): void;

  get database(): Map<number, IUser> {
    return this._database;
  }
}
