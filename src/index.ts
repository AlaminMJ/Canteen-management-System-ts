import App from './app';
import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import PostController from '@/resources/post/post.controller';
import ProductController from './resources/product/product.controller';
validateEnv();
const app = new App(
    [new PostController(), new ProductController()],
    Number(process.env.PORT)
);
app.listen();
