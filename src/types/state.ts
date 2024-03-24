import { RequestStatus } from '../components/const';
import { store } from '../store';
import { CityName } from './city';
import { Offer } from './offer';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type OfferState = {
  currentCity: CityName;
  offers: Offer[];
  error: string | null;
  isOffersDataLoading: boolean;
  status: RequestStatus;
};
