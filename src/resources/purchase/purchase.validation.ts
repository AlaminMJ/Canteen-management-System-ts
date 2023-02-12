import { object, date, string, number } from 'zod';
const productSchema = object({
  date: date,
  voucherNo: string().optional(),
  products: object({
    product: number(),
    quantity: number(),
    price: number(),
  }).array(),
});
export default productSchema;
