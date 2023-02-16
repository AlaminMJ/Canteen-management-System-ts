import App from './app';
import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import ProductController from './resources/product/product.controller';
import ReturnColtroller from './resources/return/return.controller';
import PruchaseColtroller from './resources/purchase/purchase.controller';
import UserController from './resources/user/user.controller';
import SellController from './resources/sell/sell.controller';
validateEnv();
const app = new App(
  [
    new ProductController(),
    new ReturnColtroller(),
    new PruchaseColtroller(),
    new UserController(),
    new SellController(),
  ],
  Number(process.env.PORT)
);
app.listen();
