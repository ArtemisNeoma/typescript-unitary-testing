import { NextFunction, Request, Response } from 'express';
import { ICreateUserService } from 'interfaces/domain/services/service';
import { IEndPointsController } from 'interfaces/presentation/controller';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class CreateUserController implements IEndPointsController {
  service: ICreateUserService;
  constructor(@inject('CreateUserService') service: ICreateUserService) {
    this.service = service;
  }

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await this.service.create(req.body);
      res.status(201).json('User Created');
    } catch (error) {
      next(error);
    }
  }
}
