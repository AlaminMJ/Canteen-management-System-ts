import validation from '@/middleware/validation';
import HttpException from '@/utils/exceptions/http.exception';
import { Controller } from '@/utils/interface/controller.interface';
import { NextFunction, Router, Request, Response } from 'express';
import Product from './product.interface';
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
    this.router.post(`${this.path}`, validation(productSchema), this.create);
    this.router.get(`${this.path}`, this.getAllProduct);
    this.router.get(`${this.path}:id`, this.getProduct);
    this.router.delete(`${this.path}:id`, this.getAllProduct);
    this.router.put(`${this.path}:id`, this.getAllProduct);
  }

  //   Create a Product
  private create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { name, unit, img_url } = req.body;
      const result = await this.Product.create(name, unit, img_url);
      res.status(201).json(result);
    } catch (error: any) {
      next(new HttpException(400, error.message));
    }
  };

  //   Get Single Product by ID
  private getProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const product = await this.Product.getById(req.params.id);
      if (!product) {
        return next(
          new HttpException(400, `No Product Found this id-${req.params.id}`)
        );
      }
      return res.status(201).json(product);
    } catch (error: any) {
      next(error);
    }
  };
  //   Get All Products
  private getAllProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const products: Product[] = await this.Product.getAll();
      if (!products) {
        return next(
          new HttpException(400, `No Product Found this id-${req.params.id}`)
        );
      }
      return res.status(201).json(products);
    } catch (error: any) {
      next(error);
    }
  };
  //   Delete a Product By ID
  private deleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};
  //   Update a Product by Id
  private updateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};
}

export default ProductController;
