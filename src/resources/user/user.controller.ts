import validation from '@/middleware/validation';
import { Response, Router, NextFunction, Request } from 'express';
import { Controller } from '@/utils/interface/controller.interface';
import User from './user.interface';
import UserService from './user.service';
import v from './user.validation';
class UserController implements Controller {
    public path = '/users';
    public router = Router();
    private User = new UserService();
    constructor() {
        this.initializeRouter();
    }
    private initializeRouter(): void {
        this.router.post(`${this.path}`, validation(v.create), this.create);
        this.router.get(`${this.path}`, this.getUser);
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
}
export default UserController;
