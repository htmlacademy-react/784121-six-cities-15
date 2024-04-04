import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../components/const';
import { Offer } from '../../types/offer';
import { fetchNearBy, fetchOffer } from '../thunks/offers';

type OfferState = {
  info: Offer | null;
  nearby: Offer[];
  status: RequestStatus;
};

const initialState: OfferState = {
  info: null,
  nearby: [],
  status: RequestStatus.Idle,
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    clear: (state) => {
      state.info = null;
      state.nearby = [];
    },
    updateOffer: (state, action: PayloadAction<string>) => {
      state.info =
        state.info?.id === action.payload
          ? { ...state.info, isFavorite: !state.info?.isFavorite }
          : state.info;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.info = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchNearBy.fulfilled, (state, action) => {
        state.nearby = action.payload;
      });
  },
  selectors: {
    nearbyOffers: (state) => state.nearby,
    offer: (state) => state.info,
    status: (state) => state.status,
  },
});

export const offerActions = { ...offerSlice.actions, fetchNearBy, fetchOffer };
export const offerSelectors = offerSlice.selectors;
