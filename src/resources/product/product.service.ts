import Product from './product.interface';
import productModel from './product.model';

class ProductService {
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
      const product = new this.Product({ name, unit, img_url });
      await product.save();
      return product;
    } catch (error) {
      throw new Error('Product can not Created');
    }
  }
  public async getById(id: string): Promise<Product | void> {
    try {
      const product = await this.Product.findById(id);
      return product;
    } catch (error) {}
  }
  public async getAll(): Promise<Product[] > {
    try {
      const products: Product[] = await this.Product.find();
      return products;
    } catch (error) {}
  }
  public async deleteById(id: string) {}
  public async update(id: string, data: any) {}
}
export default ProductService;
