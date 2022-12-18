import { NextFunction } from "express";

const jwt = require("jsonwebtoken");
const ClientError = require("./client-error");

function authorizationMiddleware(req: Express.Request, res: Express.Response, next: NextFunction) {
  const { 'access-token': accessToken } = req.headers;

  if (!accessToken) {
    throw new ClientError(401, 'authentication required');
  }

  try {
    const payload = jwt.verify(accessToken, process.env.TOKEN_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = authorizationMiddleware;
export {};
