import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIdx: 1,
};

const tabIndexSlice = createSlice({
  name: 'tabIndex',
  initialState,
  reudcers: {},
  extraReducers: {},
});

export default tabIndexSlice.reducer;
