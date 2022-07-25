import { ControllerAdapterType, MiddlewareArray } from '@interfaces/middleware';
import { IEndPointsController } from '@interfaces/presentation/controller';
import { Router } from 'express';
import { IRouterUser } from 'interfaces/presentation/router';
import { inject, injectable } from 'tsyringe';
import AbstractRouter from './AbstractRouter';

@injectable()
export default class UserRouter extends AbstractRouter implements IRouterUser {
  createUserController: IEndPointsController;
  listUserController: IEndPointsController;
  createMiddlewares: MiddlewareArray;
  controllerAdapter: ControllerAdapterType;

  constructor(
    @inject('FrameworkRouter') router: Router,
    @inject('CreateUserController') createUserController: IEndPointsController,
    @inject('ListUserController') listUserController: IEndPointsController,
    @inject('CreateUserMiddlewares') createMiddlewares: MiddlewareArray,
    @inject('ControllerAdapter') controllerAdapter: ControllerAdapterType,
  ) {
    super(router);
    this.createUserController = createUserController;
    this.listUserController = listUserController;
    this.createMiddlewares = createMiddlewares;
    this.controllerAdapter = controllerAdapter;
    this.routes();
  }

  _routes(): void {
    this.router.post(
      '/',
      this.createMiddlewares,
      this.controllerAdapter(this.createUserController),
    );
    this.router.get('/', this.controllerAdapter(this.listUserController));
  }
}
