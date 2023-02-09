import express, { Application } from 'express';
import { DB_URL } from './config';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { Controller } from './utils/controller.interface';
import mongoose from 'mongoose';
import compression from 'compression';
import errorHandler from './middleware/errorHandler';
class App {
  public express: Application;
  public port: number;
  constructor(controllers: Controller[], port: number) {
    this.express = express();
    this.port = port;
    this.initialseDatabaseConnection();
    this.initialiseMiddleware();
    this.initialiseControllers(controllers);
    this.initaliseErrorHandling();
  }
  private initialiseMiddleware(): void {
    this.express.use(morgan('dev'));
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(compression());
  }
  private async initialseDatabaseConnection(): Promise<void> {
    // mongoose.connect(DB_URL, { dbName: 'typescript' },()=>{});
  }
  private initialiseControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.express.use('api', controller.router);
    });
  }
  public listen(): void {
    this.express.listen(this.port, () => {
      console.log('server is runnig on port ' + this.port);
    });
  }
  private initaliseErrorHandling(): void {
    // this.express.use(errorHandler);
  }
}

export default App;
