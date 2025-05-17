import { createSlice } from "@reduxjs/toolkit";

export const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptStatus: false,
    gptResult: null,
    gptMovies: null,
  },
  reducers: {
    toggleGPTPage(state) {
      state.gptStatus = !state.gptStatus;
    },
    addGPTResults(state, action) {
      state.gptResult = action.payload;
    },
    addGPTMovies(state, action) {
      state.gptMovies = action.payload;
    },
    removeGPTMovie(state, action) {
      state.gptResult = null;
      state.gptMovies = null;
    },
  },
});

export const { toggleGPTPage, addGPTResults, addGPTMovies, removeGPTMovie } =
  gptSlice.actions;
export default gptSlice.reducer;
