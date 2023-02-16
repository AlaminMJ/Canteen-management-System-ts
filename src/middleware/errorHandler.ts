import HttpException from '@/utils/exceptions/http.exception';
import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

const errorHandler = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const message = error.message || 'Internal Server Error';
  const status = error.status || 400;
  if (error instanceof ZodError) {
    const jsonError = error.flatten();
    res.status(403).json(jsonError);
  } else {
    res.status(status).json({ message });
  }
};
export default errorHandler;
