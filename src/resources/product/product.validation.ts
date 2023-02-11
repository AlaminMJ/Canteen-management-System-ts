import { object, string } from 'zod';

const productSchema = object({
    name: string(),
    unit: string(),
    img_url: string(),
});
export default productSchema;
