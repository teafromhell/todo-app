import { createSlice } from "@reduxjs/toolkit";

const initialTheme = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme"))
  : "light";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: initialTheme,
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
      localStorage.setItem("theme", JSON.stringify(action.payload));
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
