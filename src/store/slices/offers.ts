import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OfferState } from '../../types/state';
import { CITIES, RequestStatus } from '../../components/const';
import { CityName } from '../../types/city';
import { Offer } from '../../types/offer';
import { fetchAllOffers } from '../api-actions';

const initialState: OfferState = {
  currentCity: CITIES[0].name,
  offers: [],
  error: null,
  isOffersDataLoading: false,
  status: RequestStatus.Idle,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  },
  selectors: {
    offers: (state) => state.offers,
    city: (state) => state.currentCity,
    error: (state) => state.error,
    isOffersDataLoading: (state) => state.isOffersDataLoading,
    offersStatus: (state) => state.status,
  },
});

const offersActions = offersSlice.actions;
const offersSelectors = offersSlice.selectors;

export { offersActions, offersSlice, offersSelectors };
