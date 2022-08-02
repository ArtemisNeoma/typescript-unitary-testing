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

  public async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | undefined> {
    try {
      const newUser = await this.service.create(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
}
