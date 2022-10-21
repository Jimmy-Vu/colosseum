import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  aModalIsOpen: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    login: state => {
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
    },
    setAModalIsOpen: state => {
      state.aModalIsOpen = true;
    },
    setAModalIsClosed: state => {
      state.aModalIsOpen = false;
    }
  }
});

export const { login, logout, setAModalIsOpen, setAModalIsClosed } = appSlice.actions;
export default appSlice.reducer;
