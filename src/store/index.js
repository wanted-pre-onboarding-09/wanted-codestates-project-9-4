import { configureStore } from '@reduxjs/toolkit';

import dataReducer from './data/dataSlice';
import tabIndexReducer from './tab/tabIndexSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    tab: tabIndexReducer,
  },
});

export default store;
