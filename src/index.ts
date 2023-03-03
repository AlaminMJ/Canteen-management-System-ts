import App from './app';
import http from 'http';
import { Server } from 'socket.io';
import 'dotenv/config';
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
    new SellController()
  ],
  Number(process.env.PORT)
);
const server = http.createServer(app.express);

server.listen(5000, () => {
  console.log('Server is running on ', 5000);
});
export const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
  }
});
