export interface IUser {
  full_name: string;
  email: string;
  email_confirmation: string;
  cpf: string;
  cellphone: string;
  birthdate: string;
  email_sms: boolean;
  whatsapp: boolean;
  country: string;
  city: string;
  postal_code: string;
  address: string;
}

export type IVariableDatabase = Map<number, IUser>;

export interface IEndPointsRepository {
  create(entity: object): void;
  read(id: number): undefined | object;
  readAll(): IVariableDatabase;
  update(id: number, newEntity: object): void;
  delete(id: number): void;
}

export interface IRepositoryUser extends IEndPointsRepository {
  create(entity: IUser): void;
  read(id: number): undefined | IUser;
  readAll(): IVariableDatabase;
  update(id: number, newEntity: IUser): void;
}
