import { Request, Response } from 'express';
import { IListUserService } from 'interfaces/domain/services/service';
import { IEndPointsController } from 'interfaces/presentation/controller';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class ListUserController implements IEndPointsController {
  service: IListUserService;
  constructor(@inject('ListUserService') service: IListUserService) {
    this.service = service;
  }

  public handle(req: Request, res: Response): Response | undefined {
    const info = this.service.readAll();
    return res.status(200).send({ message: info });
  }
}
