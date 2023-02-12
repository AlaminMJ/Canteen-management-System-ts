import { Schema, model } from 'mongoose';
import Sell from './sell.interface';
const sellSchema = new Schema(
  {
    date: {
      type: Date,
      require: true,
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          require: true,
          ref: 'Product',
        },
        quantity: { type: Number, require: true },
        price: { type: Number, require: true },
      },
    ],
  },
  { timestamps: true }
);
export default model<Sell>('Sell', sellSchema);
