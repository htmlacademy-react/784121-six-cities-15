import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../components/const';
import { Offer } from '../../types/offer';
import { changeFavorites, fetchFavorites } from '../thunks/favorites';
import { FavoritesStatus } from '../../types/favorites';

type FavoritesState = {
  items: Offer[];
  status: RequestStatus;
};

const initialState: FavoritesState = {
  items: [],
  status: RequestStatus.Idle,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchFavorites.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(changeFavorites.fulfilled, (state, action) => {
        switch (action.payload.status) {
          case FavoritesStatus.Added:
            state.items.push(action.payload.offer);
            break;
          case FavoritesStatus.Removed:
            state.items = state.items.filter(
              ({ id }) => id !== action.payload.offer.id
            );
            break;
        }
      })
      .addCase(changeFavorites.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(changeFavorites.pending, (state) => {
        state.status = RequestStatus.Loading;
      });
  },
  selectors: {
    favoritesStatus: (state) => state.status,
    favorites: (state) => state.items,
  },
});

export const favoritesActions = {
  ...favoritesSlice.actions,
  changeFavorites,
  fetchFavorites,
};

export const favoritesSelectors = favoritesSlice.selectors;
