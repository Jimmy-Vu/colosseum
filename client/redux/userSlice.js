"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setStateUser = exports.userSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    userId: '',
    username: ''
};
exports.userSlice = (0, toolkit_1.createSlice)({
    name: 'user',
    initialState,
    reducers: {
        setStateUser: (state, action) => {
            state.userId = action.payload.userId;
            state.username = action.payload.username;
        },
    }
});
exports.setStateUser = exports.userSlice.actions.setStateUser;
exports.default = exports.userSlice.reducer;
