import { store } from '../store';
import { CityName } from './city';
import { Offer } from './offer';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type OfferState = {
  currentCity: CityName;
  offersByCurrentCity: Offer[];
};
