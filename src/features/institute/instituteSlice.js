import { createSlice } from "@reduxjs/toolkit";
import { instituteData } from "./mockInstituteData";

const initialState = {
  data: instituteData,
  loading: false,
  error: null,
};

const instituteSlice = createSlice({
  name: "institute",
  initialState,
  reducers: {
    fetchInstituteStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchInstituteSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchInstituteFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateInstituteProfile: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const {
  fetchInstituteStart,
  fetchInstituteSuccess,
  fetchInstituteFailure,
  updateInstituteProfile,
} = instituteSlice.actions;

export default instituteSlice.reducer;
