import { Schema } from 'mongoose';
export default interface Return {
  date: Date;
  products: {
    productID: Schema.Types.ObjectId;
    qunatity: number;
    price: Number;
  }[];
}