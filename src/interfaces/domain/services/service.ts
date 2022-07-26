import { ValidationError } from 'joi';
import { IEndPointsRepository, IUser } from '../repository';

export interface IEndPointsService {
  repository: IEndPointsRepository;
}

export interface IDatabaseObject {
  [k: string]: IUser;
}

export interface ICreateUserService extends IEndPointsService {
  create(user: IUser): Promise<IUser>;
}

export interface IListUserService extends IEndPointsService {
  readAll(): IDatabaseObject;
}
