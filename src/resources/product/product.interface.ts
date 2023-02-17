import { Document } from 'mongoose';

interface Product extends Document {
  name: string;
  unit: string;
  img_url: string;
}
export default Product;
