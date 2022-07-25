import { NextFunction, Request, Response } from 'express';

export type RouteBase = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void> | void;

export interface IEndPointsController {
  handle: RouteBase;
}
