import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { store } from './';
import { offersActions } from './slices/offers';
import { APIRoutes, TIMEOUT_SHOW_ERROR } from '../components/const';

export const fetchAllOffers = createAsyncThunk<
  Offer[],
  undefined,
  {
    extra: AxiosInstance;
  }
>('fetchOffers/all', async (_arg, { extra: api }) => {
  const response = await api.get<Offer[]>(APIRoutes.Offers);

  return response.data;
});

export const clearErrorAction = createAsyncThunk('data/clearError', () => {
  setTimeout(
    () => store.dispatch(offersActions.setError(null)),
    TIMEOUT_SHOW_ERROR
  );
});
