import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryStatus: "All",
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    toggleCategory: (state, { payload }) => {
      state.categoryStatus = payload;
    },
  },
});

export const { toggleCategory } = utilsSlice.actions;

export default utilsSlice.reducer;
