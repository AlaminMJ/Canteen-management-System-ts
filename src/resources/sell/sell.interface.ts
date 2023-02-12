import { Schema } from 'mongoose';

export default interface Sell {
  date: Date;
  product: {
    productId: Schema.Types.ObjectId;
    quantity: number;
    price: number;
  }[];
}
