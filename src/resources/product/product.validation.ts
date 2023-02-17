import { object, string, z } from 'zod';

const productSchema = object({
  body: object({
    name: string({
      required_error: 'Name is Required',
      invalid_type_error: 'Product Name must be a string',
    })
      .trim()
      .max(255),
    unit: string({
      required_error: 'Unite is Required',
      invalid_type_error: 'Product Name must be a string',
    })
      .trim()
      .max(255),
    img_url: string({
      required_error: 'Image url is Required',
      invalid_type_error: 'Image url must be a string',
    })
      .url({ message: 'Please Provide a valid url' })
      .trim(),
  }),
});
export type Product = z.infer<typeof productSchema>['body'];
export default productSchema;
