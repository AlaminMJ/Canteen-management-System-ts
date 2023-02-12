import returnModel from './return.model';

class ProductService {
  private Return = returnModel;
  //
  public async create(): Promise<void> {}
  public async getById(): Promise<void> {}
  public async deleteById(): Promise<void> {}
  public async updateById(): Promise<void> {}
}

export default ProductService;
