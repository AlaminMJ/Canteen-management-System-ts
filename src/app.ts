import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { Controller } from './utils/interface/controller.interface';
// import mongoose from 'mongoose';
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
        this.initializeRoute();
        this.initializeErrorHandling();
    }
    private initializeMiddleware(): void {
        this.express.use(morgan('dev'));
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
    }
    private initializeRoute() {
        this.express.get('/health', (req: Request, res: Response) => {
            res.status(200).json({ message: 'OK' });
        });
    }
    private async initializeDatabaseConnection(): Promise<void> {
        // mongoose.connect(DB_URL, { dbName: 'typescript' },()=>{});
    }
    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.express.use('/api', controller.router);
        });
    }
    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(
                `Server is running on port ${this.port} on ${process.env.NODE_ENV} mode`
            );
        });
    }
    private initializeErrorHandling(): void {
        this.express.use(errorHandler);
    }
}

export default App;
