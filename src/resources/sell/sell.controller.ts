import { Controller } from '@/utils/interface/controller.interface';
import { NextFunction, Request, Response, Router } from 'express';

class SellController implements Controller {
  public path = '/sells';
  public router = Router();
  constructor() {
    this.initializeRouter();
  }
  private initializeRouter() {
    this.router.post(`${this.path}`, this.create);
  }
  private async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {}
}
export default SellController;
