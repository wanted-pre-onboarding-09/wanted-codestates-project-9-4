import { createSlice } from '@reduxjs/toolkit';
import { fetchDataByContentId, fetchDataBySectorId } from './dataAsyncThunk';

const initialState = {
  loading: false,
  error: null,
  sector: null,
  contents: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDataBySectorId.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.sctor = null;
      state.contents = null;
    },
    [fetchDataBySectorId.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.sector = action.payload.sector;
      state.contents = action.payload.content;
    },
    [fetchDataBySectorId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.data = null;
    },
    [fetchDataByContentId.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.contents = null;
    },
    [fetchDataByContentId.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.contents = action.payload.data.content;
    },
    [fetchDataByContentId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.contents = null;
    },
  },
});

export default dataSlice.reducer;
