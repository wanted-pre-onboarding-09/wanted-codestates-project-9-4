import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIdx: 1,
};

const tabIndexSlice = createSlice({
  name: 'tabIndex',
  initialState,
  reudcers: {
    nextStep: (state) => ({
      ...state,
      currentIdx: state.currentIdx + 1,
    }),
    previousStep: (state) => ({
      ...state,
      currentIdx:
        state.currentIdx > 1 ? state.currentIdx - 1 : state.currentIdx,
    }),
    clearStep: () => initialState,
  },
  extraReducers: {},
});

export default tabIndexSlice.reducer;
