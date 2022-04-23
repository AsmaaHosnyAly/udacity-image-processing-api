import { Response, Request, NextFunction } from "express";

function validateParams(request: Request, response: Response, next: NextFunction): void {
  const { query } =request;
  const requiredParams = ["filename", "height", "width"];

  for(let param of requiredParams ){
    if (query[param] === undefined) {
          response.status(400).send("Error:Please enter all parameters");
          return;
        }
    
        const value = query[param];
    
        if (param == "filename" && typeof value !== "string") {
          response.status(400).send("Error!!! Filename should be a string");
          return;
        }
    
        if (param == "height" || param == "width") {
          const num = Number(value);
          if (!num) {
            response.status(400).send("Height and width must be numbers");
            return;
          }
        }

  }
  next();
}

export default validateParams;
