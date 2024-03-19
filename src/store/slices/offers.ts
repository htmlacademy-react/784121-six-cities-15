import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OfferState } from '../../types/state';
import { CITIES } from '../../components/const';
import { OFFERS } from '../../mocks/offers';
import { CityName } from '../../types/city';

const initialState: OfferState = {
  currentCity: CITIES[0].name,
  offersByCurrentCity: OFFERS,
};

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    changeCity: (state, action: PayloadAction<CityName>) => {
      state.currentCity = action.payload;
    },
  },
  selectors: {
    offers: (state) => state.offersByCurrentCity,
    city: (state) => state.currentCity,
  },
});

const offersActions = offersSlice.actions;
const offersSelectors = offersSlice.selectors;

export { offersActions, offersSlice, offersSelectors };
