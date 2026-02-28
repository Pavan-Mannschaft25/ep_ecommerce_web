import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  partnerType: null,
  role: null, // For fitness partners: 'trainer' | 'center' | 'both'
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.partnerType = action.payload.partnerType;
      state.role = action.payload.role || null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.partnerType = null;
      state.role = null;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, setRole } =
  authSlice.actions;
export default authSlice.reducer;
