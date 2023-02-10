import HttpException from '@/utils/exceptions/http.exception';
import { Controller } from '../../utils/interface/controller.interface';
import { Router, Request, Response, NextFunction, Application } from 'express';
import PostService from './post.service';

class PostController implements Controller {
    public path = '/posts';
    public router = Router();
    private PostService = new PostService();

    constructor() {
        this.initializeRouter();
    }
    private initializeRouter(): void {
        this.router.get(`${this.path}`, this.create);
    }

    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { title, body } = req.body();
            const post = await this.PostService.create(title, body);
            res.json(post);
        } catch (error) {
            return next(new HttpException(400, 'Can not Create Post'));
        }
    };
}
export default PostController;
