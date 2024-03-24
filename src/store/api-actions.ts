import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offer } from '../types/offer';
import { APIRoutes, TIMEOUT_SHOW_ERROR } from '../components/const';
import { AppDispatch, State } from '../types/state';
import { store } from './';
import { offersActions } from './slices/offers';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(offersActions.setOffersDataLoadingStatus(true));
  const { data } = await api.get<Offer[]>(APIRoutes.Offers);
  dispatch(offersActions.setOffersDataLoadingStatus(false));
  dispatch(offersActions.loadOffers(data));
});

export const clearErrorAction = createAsyncThunk('data/clearError', () => {
  setTimeout(
    () => store.dispatch(offersActions.setError(null)),
    TIMEOUT_SHOW_ERROR
  );
});
