import { Response, Router, NextFunction, Request } from 'express';
import { Controller } from './../../utils/interface/controller.interface';
import User from './user.interface';
class UserController implements Controller {
    public path = '/users';
    public router = Router();
    constructor() {
        this.initializeRouter();
    }
    private initializeRouter(): void {
        this.router.get(`${this.path}`, this.getUser);
    }
    private async getUser(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<User[] | void> {
        try {
        } catch (error) {}
    }
}
export default UserController;
