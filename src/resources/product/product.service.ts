import Product from './product.interface';
import productModel from './product.model';
export interface ProductInterface {
  create(name: string, unit: string, img_url: string): Promise<Product | void>;
  getById(id: string): Promise<Product | void>;
  getAll(id: string): Promise<Product[] | void>;
  deleteById(id: string): Promise<void>;
  update(id: string, data: any): Promise<void>;
}
class ProductService implements ProductInterface {
  private Product = productModel;
  /**
   *Create a Product
   * */
  public async create(
    name: string,
    unit: string,
    img_url: string
  ): Promise<Product | void> {
    try {
      console.log('ok');
      const product = new this.Product({ name, unit, img_url });
      await product.save();
      return product;
    } catch (error) {
      throw new Error('Product can not Created');
    }
  }
  public async getById(id: string): Promise<Product | void> {}
  public async getAll(): Promise<Product[] | void> {}
  public async deleteById(id: string): Promise<void> {}
  public async update(id: string, data: any): Promise<void> {}
}
export default ProductService;

