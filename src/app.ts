import { io } from './index';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import 'dotenv/config';
import { Controller } from './utils/interface/controller.interface';
import compression from 'compression';
import errorHandler from './middleware/errorHandler';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import session, { SessionOptions } from 'express-session';
import mongoSanitize from 'express-mongo-sanitize';
import cookieParser from 'cookie-parser';

class App {
  public express: Application;
  public port: number;
  constructor(controllers: Controller[], port: number) {
    this.express = express();
    this.port = port;
    this.initializeDatabaseConnection();
    this.initializeMiddleware();
    this.initializeControllers(controllers);
    this.initializeRoute();
    this.initializeErrorHandling();
  }
  // initialize All Middleware
  private initializeMiddleware(): void {
    this.express.use(morgan('tiny'));
    this.express.use(express.json());
    this.express.use(rateLimit({ max: 3000, windowMs: 10 * 60 * 60 }));
    this.express.use(mongoSanitize());
    this.express.use(
      session({
        secret: 'mysecretkey',
        resave: false,
        saveUninitialized: false,
        cookie: {
          secure: true,
          httpOnly: true,
          maxAge: 3600000
        }
      })
    );
    this.express.use(cookieParser());
    this.express.use(
      cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        credentials: true
      })
    );
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(compression());
  }
  // SetUp All Routers

  private initializeRoute() {
    this.express.get('/health', (req: Request, res: Response) => {
      res.status(200).json({ message: 'OK' });
      io.emit('hi', 'Ok server is ok');
    });
  }
  // Connection on Database
  private async initializeDatabaseConnection(): Promise<void> {
    mongoose.set({ strictQuery: false });
    await mongoose.connect(process.env.MONGO_URL as string, {
      dbName: 'typescript'
    });
  }

  // Setting All controller and Router
  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.express.use('/api', controller.router);
    });
  }
  // Error Handler
  private initializeErrorHandling(): void {
    this.express.use(errorHandler);
  }
  // App Listener
  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(`Server is running at port ${this.port}`);
    });
  }
}

export default App;
