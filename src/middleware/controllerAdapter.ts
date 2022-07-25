import { IEndPointsController } from '@interfaces/presentation/controller';
import { NextFunction, Request, Response } from 'express';

export default function ControllerAdapter(controller: IEndPointsController) {
  return (req: Request, res: Response, next: NextFunction) =>
    controller.handle(req, res, next);
}
