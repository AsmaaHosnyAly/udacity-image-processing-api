import { Response, Request, NextFunction } from "express";

function logger(req: Request, res: Response, next: NextFunction): void {
  next();
}

export default logger;
