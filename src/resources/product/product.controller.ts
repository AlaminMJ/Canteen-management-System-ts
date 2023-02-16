import validation from '@/middleware/validation';
import HttpException from '@/utils/exceptions/http.exception';
import { Controller } from '@/utils/interface/controller.interface';
import { NextFunction, Router, Request, Response } from 'express';
import Product from './product.interface';
import ProductService, { ProductInterface } from './product.service';
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

    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Product> => {
        try {
            const { name, unit, img_url } = req.body;
            const result = await this.Product.create(name, unit, img_url);
            res.status(201).json(result);
        } catch (error: any) {
            next(new HttpException(400, error.message));
        }
    };
}

export default ProductController;
