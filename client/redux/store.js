"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const appSlice_1 = require("./appSlice");
const userSlice_1 = require("./userSlice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        app: appSlice_1.default,
        user: userSlice_1.default
    }
});
