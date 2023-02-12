import { Schema } from 'mongoose';
export default interface Product {
  date: Date;
  voucherNo: string | undefined;
  products: {
    productID: Schema.Types.ObjectId;
    qunatity: number;
    price: Number;
  }[];
}
