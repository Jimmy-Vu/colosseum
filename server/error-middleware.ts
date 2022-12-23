import { Request, Response, NextFunction } from "express";

const ClientError = require('./client-error');

function errorMiddleware(err: Express.Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ClientError) {
    res.status(err.status).json({
      error: err.message
    });
  } else {
    console.log(err);
    res.status(500).json({
      error: 'An unexpected error occurred'
    });
  }
}

module.exports = errorMiddleware;
