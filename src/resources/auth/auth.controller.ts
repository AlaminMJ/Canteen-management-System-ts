import { Controller } from '@/utils/interface/controller.interface';
import { NextFunction, Router, Request, Response } from 'express';
import AuthService from './auth.service';

class AuthController implements Controller {
  public path = '/auth';
  public router = Router();
  private auth = new AuthService();

  // Initialize
  constructor() {
    this.initializeRouter();
  }
  // Route
  private initializeRouter(): void {
    this.router.post(`${this.path}/login`, this.login);
    this.router.post(`${this.path}/register`, this.register);
    this.router.post(`${this.path}/forget-password`, this.forgetPassword);
    this.router.post(`${this.path}/verify`, this.verify);
  }
  // Login logic
  private login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { email, password } = req.body;
      const user = this.auth.findByEmail(email);
      // user.isMatchPassword(password);
    } catch (error) {
      next(error);
    }
  };

  // Register Logic
  private register = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { name, email, password } = req.body;
      const user = await this.auth.create(name, email, password);
      res.status(201).json({ status: 'Success', data: user });
    } catch (error) {}
  };
  // verify User Logic
  private verify = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    res.status(200).json({ message: 'you are registered' });
  };
  // Forget Logic
  private forgetPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    res.status(200).json({ message: 'you are registered' });
  };
}

export default AuthController;
