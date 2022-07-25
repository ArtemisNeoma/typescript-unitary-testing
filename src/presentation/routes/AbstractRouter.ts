import { Router } from 'express';
import { IEndPointsRouter } from 'interfaces/presentation/router';

export default abstract class AbstractRouter implements IEndPointsRouter {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  protected abstract _routes(): void;

  get routes() {
    return this._routes;
  }

  set routes(method: () => void) {
    this._routes = method;
  }
}
