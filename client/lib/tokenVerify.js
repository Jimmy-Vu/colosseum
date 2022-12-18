"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_decode_1 = require("jwt-decode");
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
