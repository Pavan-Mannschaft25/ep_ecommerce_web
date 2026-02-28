// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/auth/authSlice";
// import trainerReducer from "../features/trainer/trainerSlice";
// import instituteReducer from "../features/institute/instituteSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     trainer: trainerReducer,
//     institute: instituteReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import trainerReducer from "../features/trainer/trainerSlice";
import instituteReducer from "../features/institute/instituteSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    trainer: trainerReducer,
    institute: instituteReducer,
  },
});

export default store; // ✅ IMPORTANT
