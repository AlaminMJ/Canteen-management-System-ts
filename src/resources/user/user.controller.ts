import { Response, Router, NextFunction, Request } from 'express';
import { Controller } from '@/utils/interface/controller.interface';
import User from './user.interface';
import UserService from './user.service';

class UserController implements Controller {
  public path = '/user';
  public router = Router();
  private user = new UserService();
  constructor() {
    this.initializeRouter();
  }
  private initializeRouter(): void {
    this.router.get(`${this.path}/:id`, this.getUser);
    this.router.delete(`${this.path}/:id`, this.delete);
  }

  /**
   *Create user
   * */
  private async create(req: Request, res: Response): Promise<User | void> {
    res.status(201).json({ message: 'Create user' });
  }
  /**
   *
   * */
  private async getUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<User[] | void> {
    try {
      this.user.getUserById(req.params.id);
    } catch (error) {}
  }
  //
  private async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<User[] | void> {
    try {
      this.user.deleteUserById(req.params.id);
    } catch (error) {}
  }
}
export default UserController;
