import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './data/dataSlice';
import tabIndexReducer from './tab/tabIndexSlice';

/* eslint-disable */
const store = configureStore({
  reducer: {
    data: dataReducer,
    tab: tabIndexReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
