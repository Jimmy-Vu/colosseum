import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isLoggedIn: false,
    isMobileView: false
};
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
        setMobileTrue: state => {
            state.isMobileView = true;
        },
        setMobileFalse: state => {
            state.isMobileView = false;
        }
    }
});
export const { login, logout, setMobileTrue, setMobileFalse } = appSlice.actions;
export default appSlice.reducer;
