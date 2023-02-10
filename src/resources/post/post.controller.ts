import HttpException from '@/utils/exceptions/http.exception';
import { Controller } from '../../utils/interface/controller.interface';
import { Router, Request, Response, NextFunction } from 'express';

class Post implements Controller {
    public path = '/posts';
    public router = Router();

    constructor() {
        this.initializeRouter();
    }
    private initializeRouter(): void {}
}
export default Post;
