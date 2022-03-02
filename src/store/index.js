import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import dataReducer from './data/dataSlice';
import tabIndexReducer from './tab/tabIndexSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    tab: tabIndexReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  serializableCheck: false,
});

export default store;
