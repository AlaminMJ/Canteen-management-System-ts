import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { Controller } from './utils/interface/controller.interface';
import mongoose from 'mongoose';
import compression from 'compression';
import errorHandler from './middleware/errorHandler';

class App {
    public express: Application;
    public port: number;
    constructor(controllers: Controller[], port: number) {
        this.express = express();
        this.port = port;
        this.initializeDatabaseConnection();
        this.initializeMiddleware();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }
    private initializeMiddleware(): void {
        this.express.use(morgan('dev'));
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
    }
    private async initializeDatabaseConnection(): Promise<void> {
        // mongoose.connect(DB_URL, { dbName: 'typescript' },()=>{});
    }
    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.express.use('api', controller.router);
        });
    }
    public listen(): void {
        this.express.listen(this.port, () => {
            console.log('server is running on port ' + this.port);
        });
    }
    private initializeErrorHandling(): void {
        this.express.use(errorHandler);
    }
}

export default App;
