import HttpException from '@/utils/exceptions/http.exception';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (error: HttpException, req: Request, res: Response) => {
    const message = error.message || 'Internal Server Error';
    const status = error.status || 400;

    res.status(status).json({ status, message });
};
export default errorHandler;
