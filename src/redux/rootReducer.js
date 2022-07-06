import { combineReducers } from "@reduxjs/toolkit";
import logInreducer from "./slices/loginSlice";

const rootReducer = combineReducers({
    loggedIn: logInreducer,
});

export default rootReducer;