"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_decode_1 = __importDefault(require("jwt-decode"));
function tokenVerify(token) {
    try {
        const payload = (0, jwt_decode_1.default)(token);
        return payload;
    }
    catch (err) {
        console.error(err);
    }
}
exports.default = tokenVerify;
