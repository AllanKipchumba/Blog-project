import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isFetching: false,
    error: false,
};

const loggedInSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state, action) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.user = action.payload;
        },
        loginFail: (state, action) => {
            state.error = true;
        },
    },
});
// export actions
export const { loginStart, loginFail, loginSuccess } = loggedInSlice.actions;
// axport reducer
export default loggedInSlice.reducer;