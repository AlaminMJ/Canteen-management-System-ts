import { model, Schema } from 'mongoose';
import Product from './product.interface';

const productSchema = new Schema(
    {
        name: { type: String, require: true, unique: true },
        unit: { type: String, require: true },
        img_url: { type: String, require: true },
    },
    { timestamps: true }
);
export default model<Product>('Product', productSchema);
