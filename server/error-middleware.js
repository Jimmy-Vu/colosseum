"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClientError = require('./client-error');
function errorMiddleware(err, req, res, next) {
    if (err instanceof ClientError) {
        res.status(err.status).json({
            error: err.message
        });
    }
    else {
        console.log(err);
        res.status(500).json({
            error: 'An unexpected error occurred'
        });
    }
}
module.exports = errorMiddleware;
