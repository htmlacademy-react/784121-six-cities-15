import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CITIES, RequestStatus } from '../../components/const';
import { CityName } from '../../types/city';
import { Offer } from '../../types/offer';
import { fetchAllOffers } from '../thunks/offers';

export type OfferState = {
  currentCity: CityName;
  offers: Offer[];
  status: RequestStatus;
  activeId?: Offer['id'] | null;
};

const initialState: OfferState = {
  currentCity: CITIES[0].name,
  offers: [],
  status: RequestStatus.Idle,
  activeId: null,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityName>) => {
      state.currentCity = action.payload;
    },
    setActiveId: (state, action: PayloadAction<Offer['id'] | null>) => {
      state.activeId = action.payload;
    },
    updateOffers: (state, action: PayloadAction<string>) => {
      state.offers = state.offers.map((offer) =>
        offer.id === action.payload
          ? { ...offer, isFavorite: !offer.isFavorite }
          : offer
      );
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
    offersStatus: (state) => state.status,
    activeId: (state) => state.activeId,
  },
});

const offersActions = { ...offersSlice.actions, fetchAllOffers };
const offersSelectors = offersSlice.selectors;

export { offersActions, offersSlice, offersSelectors };
