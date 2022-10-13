import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setStateUser: (state, action) => {
      state.userInfo = action.payload;
    },
  }
});

export const { setStateUser } = userSlice.actions;
export default userSlice.reducer;
