import { NextFunction, Request, Response } from 'express';

export type RouteBase = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<Response | void> | Response | void;

export interface IEndPointsController {
  handle: RouteBase;
}
