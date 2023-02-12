import { Schema, model } from 'mongoose';
import Product from './purchase.interface';
const purchaseSchema = new Schema(
  {
    date: { type: Date, require: true },
    voucherNo: { type: String },
    products: [
      {
        product: { type: Schema.Types.ObjectId, require: true, ref: 'Product' },
        quantity: { type: Number, require: true },
        price: { type: Number, require: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model<Product>('Purchase', purchaseSchema);
