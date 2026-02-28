import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import trainerReducer from "../features/trainer/trainerSlice";
import instituteReducer from "../features/institute/instituteSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  trainer: trainerReducer,
  institute: instituteReducer,
});

export default rootReducer;
