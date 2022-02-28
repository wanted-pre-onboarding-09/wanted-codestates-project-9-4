import { createAsyncThunk } from '@reduxjs/toolkit';
import dataAPI from '../../services/dataServices';

export const fetchDataBySectorId = createAsyncThunk(
  'data/fetchBySectorId',
  async (payload, thunkAPI) => {
    try {
      const response = await dataAPI.fetchBySectorId(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const fetchDataByContentId = createAsyncThunk(
  'data/fetchByContentId',
  async (payload, thunkAPI) => {
    try {
      const response = await dataAPI.fetchByContentId(payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
