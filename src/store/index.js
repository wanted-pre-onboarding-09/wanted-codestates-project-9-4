import { configureStore } from '@reduxjs/toolkit';

import dataSlice from './data/dataSlice';
import tabIndexSlice from './tab/tabIndexSlice';

const store = configureStore({
  reducer: {
    data: dataSlice,
    tab: tabIndexSlice,
  },
});

export default store;
