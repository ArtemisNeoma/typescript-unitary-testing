import { MiddlewareArray } from '@interfaces/middleware';
import { Router } from 'express';
import { IEndPointsController } from './controller';

export interface IEndPointsRouter {
  router: Router;
  routes(): void;
}

export interface IRouterUser {
  createUserController: IEndPointsController;
  listUserController: IEndPointsController;
  createMiddlewares: MiddlewareArray;
}
