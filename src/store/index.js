import { configureStore } from '@reduxjs/toolkit';

import dataSlice from './data/dataSlice';
import tabIndexSlice from './tab/tabIndexSlice';

const store = configureStore({
  reducer: {
    dataSlice,
    tabIndexSlice,
  },
});

export default store;
