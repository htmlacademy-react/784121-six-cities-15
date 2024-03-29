import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { APIRoutes } from '../components/const';

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
