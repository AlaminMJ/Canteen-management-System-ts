import { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';
const validation =
    (schema: AnyZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
        } catch (error) {
            next(error);
        }
    };
export default validation;
