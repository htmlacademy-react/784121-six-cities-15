import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OfferState } from '../../types/state';
import { CITIES } from '../../components/const';
import { CityName } from '../../types/city';
import { Offer } from '../../types/offer';

const initialState: OfferState = {
  currentCity: CITIES[0].name,
  offers: [],
  error: null,
  isOffersDataLoading: false,
};

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    changeCity: (state, action: PayloadAction<CityName>) => {
      state.currentCity = action.payload;
    },
    loadOffers: (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setOffersDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isOffersDataLoading = action.payload;
    },
  },
  selectors: {
    offers: (state) => state.offers,
    city: (state) => state.currentCity,
    error: (state) => state.error,
    isOffersDataLoading: (state) => state.isOffersDataLoading,
  },
});

const offersActions = offersSlice.actions;
const offersSelectors = offersSlice.selectors;

export { offersActions, offersSlice, offersSelectors };
