import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logintoken:<string> '',
    isLoading:<boolean> false,
}

export const AppSlice = createSlice({
    name: 'searchState', initialState, reducers: {
        changeLoginToken: (state, action) => {
            state.logintoken = action.payload
        },
        changeIsLogin: (state, action) => {
            state.isLoading = action.payload
        },
    }
});
export const { changeLoginToken, changeIsLogin } = AppSlice.actions;
export default AppSlice.reducer;