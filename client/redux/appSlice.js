"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMobileFalse = exports.setMobileTrue = exports.logout = exports.login = exports.appSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    isLoggedIn: false,
    isMobileView: false
};
exports.appSlice = (0, toolkit_1.createSlice)({
    name: 'app',
    initialState,
    reducers: {
        login: state => {
            state.isLoggedIn = true;
        },
        logout: state => {
            state.isLoggedIn = false;
        },
        setMobileTrue: state => {
            state.isMobileView = true;
        },
        setMobileFalse: state => {
            state.isMobileView = false;
        }
    }
});
_a = exports.appSlice.actions, exports.login = _a.login, exports.logout = _a.logout, exports.setMobileTrue = _a.setMobileTrue, exports.setMobileFalse = _a.setMobileFalse;
exports.default = exports.appSlice.reducer;
