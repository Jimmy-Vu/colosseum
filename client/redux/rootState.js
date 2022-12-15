import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import userReducer from './userSlice';
const rootReducer = combineReducers({ app: appReducer, user: userReducer });
