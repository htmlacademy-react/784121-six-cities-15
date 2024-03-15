import { createReducer } from '@reduxjs/toolkit';
import { LOCATIONS, SortType } from '../components/const';
import { OFFERS } from '../mocks/offers';
import { changeCity, fillOfferList, setSortType } from './action';

const initialState = {
  currentCity: LOCATIONS[0],
  offersByCurrentCity: OFFERS.filter(
    (offer) => offer.city.name === LOCATIONS[0]
  ),
  sortType: SortType.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(fillOfferList, (state) => {
      const offersByCurrentCity = OFFERS.filter(
        (offer) => offer.city.name === state.currentCity
      );

      state.offersByCurrentCity = offersByCurrentCity;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export { reducer };
