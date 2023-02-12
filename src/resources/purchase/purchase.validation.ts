import { object, z, string, number } from 'zod';
const productSchema = object({
  date: z.date(),
  voucherNo: string().optional(),
  products: object({
    product: number(),
    quantity: number(),
    price: number(),
  }).array(),
});
export default productSchema;
export type product = z.infer<typeof productSchema>;
