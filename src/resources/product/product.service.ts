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
            console.log('ok');
            const product = new this.Product({ name, unit, img_url });
            await product.save();
            return product;
        } catch (error) {
            throw new Error('Product can not Created');
        }
    }
    public async getById(): Promise<Product | void> {}
}
export default ProductService;
