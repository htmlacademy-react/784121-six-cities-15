import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './slices/offers';
import { createApi } from '../services/api';

const reducer = combineReducers({ [offersSlice.name]: offersSlice.reducer });

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: createApi(),
      },
    }),
});
