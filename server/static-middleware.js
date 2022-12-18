"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, 'public');
const staticMiddleware = express.static(publicPath);
module.exports = staticMiddleware;
