import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer
  }
});
