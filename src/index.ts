import App from './app';
import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import ProductController from './resources/product/product.controller';
import ReturnController from './resources/return/return.controller';
import PurchaseController from './resources/purchase/purchase.controller';
import UserController from './resources/user/user.controller';
import SellController from './resources/sell/sell.controller';
import AuthController from './resources/auth/auth.controller';
validateEnv();
const app = new App(
    [
        new AuthController(),
        new ProductController(),
        new ReturnController(),
        new PurchaseController(),
        new UserController(),
        new SellController(),
    ],
    Number(process.env.PORT)
);
app.listen();
