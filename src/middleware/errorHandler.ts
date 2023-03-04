import HttpException from '@/utils/exceptions/http.exception';
import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

const errorHandler = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {

};
export default errorHandler;
