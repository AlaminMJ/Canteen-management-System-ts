import { io } from './index';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import 'dotenv/config';
import favicon from 'express-favicon';
import { Controller } from './utils/interface/controller.interface';


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

    });
  }
}

export default App;
