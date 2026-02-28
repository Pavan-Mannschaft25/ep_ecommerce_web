import { createSlice } from "@reduxjs/toolkit";
import { trainerData } from "./mockTrainerData";

const initialState = {
  data: trainerData,
  loading: false,
  error: null,
};

const trainerSlice = createSlice({
  name: "trainer",
  initialState,
  reducers: {
    fetchTrainerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTrainerSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchTrainerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateTrainerProfile: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const {
  fetchTrainerStart,
  fetchTrainerSuccess,
  fetchTrainerFailure,
  updateTrainerProfile,
} = trainerSlice.actions;

export default trainerSlice.reducer;
