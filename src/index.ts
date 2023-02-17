import App from './app';
import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import ProductController from './resources/product/product.controller';
import ReturnController from './resources/return/return.controller';
import PurchaseController from './resources/purchase/purchase.controller';
import UserController from './resources/user/user.controller';
import SellController from './resources/sell/sell.controller';
import { Server } from 'socket.io';
import { createServer } from 'http';
validateEnv();
const app = new App(
    [
        new ProductController(),
        new ReturnController(),
        new PurchaseController(),
        new UserController(),
        new SellController(),
    ],
    Number(process.env.PORT)
);
const server=createServer(app.express)
server.listen(process.env.PORT,()=>{
    console.log(`Server is runing on port ${process.env.PORT}`)
})
const io = new Server(server)
io.on('connection',(socket)=>{
    console.log(socket)
})
