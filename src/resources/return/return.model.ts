import { Schema, model } from 'mongoose';
import Return from './return.interface';
const returnSchema = new Schema(
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

export default model<Return>('Return', returnSchema);
