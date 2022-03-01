import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIdx: 1,
};

export const tabIndexSlice = createSlice({
  name: 'tabIndex',
  initialState,
  reducers: {
    changeSector: (state, action) => {
      state.currentIdx = action.payload;
    },
  },
});

export const { changeSector } = tabIndexSlice.actions;
export default tabIndexSlice.reducer;
