import { createSlice } from "@reduxjs/toolkit";
const savedTheme = JSON.parse(localStorage.getItem("utils-theme"));
const initialState = {
  categoryStatus: "All",
  theme: savedTheme || "light",
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    toggleCategory: (state, { payload }) => {
      state.categoryStatus = payload;
    },
    toggleDarkMode: (state, { payload }) => {
      state.theme = payload;
      localStorage.setItem("utils-theme", JSON.stringify(state.theme));
    },
  },
});

export const { toggleCategory, toggleDarkMode } = utilsSlice.actions;

export default utilsSlice.reducer;
