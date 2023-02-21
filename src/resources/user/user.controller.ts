import { Response, Router, NextFunction, Request } from 'express';
import { Controller } from '@/utils/interface/controller.interface';
import User from './user.interface';
import UserService from './user.service';

class UserController implements Controller {
    public path = '/user';
    public router = Router();
    private User = new UserService();
    constructor() {
        this.initializeRouter();
    }
    private initializeRouter(): void {
        this.router.get(`${this.path}/id`, this.getUser);
        this.router.get(`${this.path}`, this.getAllUser);
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
            const {} = req.body;
        } catch (error) {}
    }
    //
    private async getAllUser(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<User[] | void> {
        try {
            const {} = req.body;
        } catch (error) {}
    }
}
export default UserController;
