import HttpException from '@/utils/exceptions/http.exception';
import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

const errorHandler = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = {
    error: 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && {
      originalMessage: error.message,
    }),
  };
  const status = error.status || 400;
  if (error instanceof ZodError) {
    const jsonEroor = error.flatten();
    res.status(403).json(jsonEroor.fieldErrors);
  }
  res.status(status).json(message);
};
export default errorHandler;
