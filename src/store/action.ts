import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types/city';
import { Offer } from '../types/offer';

export const changeCity = createAction<CityName>('changeCity');
export const loadOffers = createAction<Offer[]>('loadOffers');
export const setError = createAction<string | null>('setError');
export const setOffersDataLoadingStatus = createAction<boolean>(
  'setOffersDataLoadingStatus'
);
