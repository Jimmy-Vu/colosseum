"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const appSlice_1 = require("./appSlice");
const userSlice_1 = require("./userSlice");
const rootReducer = (0, toolkit_1.combineReducers)({ app: appSlice_1.default, user: userSlice_1.default });
