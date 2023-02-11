import validation from '@/middleware/validation';
import HttpException from '@/utils/exceptions/http.exception';
import { Controller } from '@/utils/interface/controller.interface';
import { NextFunction, Router, Request, Response } from 'express';
import ProductService from './product.service';
import productSchema from './product.validation';

class ProductController implements Controller {
    public path = '/products';
    public router = Router();
    private Product = new ProductService();

    constructor() {
        this.initializeRouter();
    }
    private initializeRouter(): void {
        this.router.post(
            `${this.path}`,
            validation(productSchema),
            this.create
        );
    }

    private async create(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            console.log(this.Product);
            res.status(201).json(req.body);
        } catch (error: any) {
            next(new HttpException(400, error.message));
        }
    }
}

export default ProductController;
