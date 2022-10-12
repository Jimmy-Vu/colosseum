import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    login: state => {
      state.loggedIn = true;
    },
    logout: state => {
      state.loggedIn = false;
    }
  }
});

export const { login, logout } = appSlice.actions;
export default appSlice.reducer;
