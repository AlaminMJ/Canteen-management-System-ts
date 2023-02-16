import { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';
const validation =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req);
      next();
    } catch (error: any) {
      next(error);
    }
  };
export default validation;
