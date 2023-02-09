import { Request, Response, NextFunction } from 'express';
const errorHandler = (error: Error, req: Request, res: Response) => {
  res.json({ error: error.message });
};
export default errorHandler;
