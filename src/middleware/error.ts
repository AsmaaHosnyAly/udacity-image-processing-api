import { Response, Request } from "express";

function errorHandler(req: Request, res: Response): void {
  const responseHTML = `<p>There was an error processing your image</p>`;
  res.send(responseHTML);
}

export default errorHandler;
