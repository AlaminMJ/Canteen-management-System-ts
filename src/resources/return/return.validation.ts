import { object, date, string, number } from 'zod';
import { Schema } from 'mongoose';
const productSchema = object({
  date: date(),
  products: object({
    productId: string(),
    unite: number(),
  }).array(),
});
export default productSchema;
