import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { Controller } from './utils/interface/controller.interface';
import compression from 'compression';
import errorHandler from './middleware/errorHandler';
import mongoose from 'mongoose';
const logFilePath = path.join(__dirname, 'logs', 'access.log');
const accessLogStream = fs.createWriteStream(logFilePath, { flags: 'a' });
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
        this.express.use(morgan('tiny'));
        this.express.use(express.json());
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
        mongoose.set({ strictQuery: false });
        await mongoose.connect(process.env.MONGO_URL as string, {
            dbName: 'typescript',
        });
        console.log('Database connect successfully');
        process.exit(1);
    }
    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.express.use('/api', controller.router);
        });
    }
    private initializeErrorHandling(): void {
        this.express.use(errorHandler);
    }
    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`Server is running at port ${this.port}`);
        });
    }
}

export default App;
