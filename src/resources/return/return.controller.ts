import { Controller } from '@/utils/interface/controller.interface';
import { Router, NextFunction, Request, Response } from 'express';

class ReturnColtroller implements Controller {
  public path = '/returns';
  public router = Router();
  constructor() {
    this.initializeRouter();
  }
  private initializeRouter(): void {
    this.router.post(`${this.path}`, this.create);
  }
  /*
   *Create
   **/
  private async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {}
  /*
   *Create
   **/
  private async getReturn(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {}
  /*
   *Create
   **/
  private async deleteReturn(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {}
  /*
   *Create
   **/
  private async UpdateReturn(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {}
}
export default ReturnColtroller;
