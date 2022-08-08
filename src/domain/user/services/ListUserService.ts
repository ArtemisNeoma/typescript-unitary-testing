import {
  IDatabaseObject,
  IListUserService,
} from 'interfaces/domain/services/service';
import { IRepositoryUser } from 'interfaces/domain/repository';
import { inject, injectable } from 'tsyringe';
import StatusError from '@util/error';

@injectable()
export default class ListUserService implements IListUserService {
  repository: IRepositoryUser;
  failedError: StatusError = new StatusError(
    500,
    'Error: Failed to readAll database',
  );
  constructor(
    @inject('UserRepository')
    repository: IRepositoryUser,
  ) {
    this.repository = repository;
  }

  public readAll(): IDatabaseObject {
    try {
      const allUsers = this.repository.readAll();
      const usersJSON = Object.fromEntries(allUsers);
      return usersJSON;
    } catch (err) {
      throw this.failedError;
    }
  }
}
