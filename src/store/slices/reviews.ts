import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../components/const';
import { Review } from '../../types/review';
import { commentsThunks } from '../thunks/comments';

type ReviewsState = {
  items: Review[];
  status: RequestStatus;
};

const initialState: ReviewsState = {
  items: [],
  status: RequestStatus.Idle,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(commentsThunks.fetchComments.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(commentsThunks.fetchComments.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(commentsThunks.fetchComments.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(commentsThunks.postComment.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(commentsThunks.postComment.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(commentsThunks.postComment.pending, (state) => {
        state.status = RequestStatus.Loading;
      });
  },
  selectors: {
    reviews: (state) => state.items,
    reviewStatus: (state) => state.status,
  },
});

export const reviewsSelectors = reviewsSlice.selectors;

export const reviewsActions = {
  ...reviewsSlice.actions,
  ...commentsThunks,
};
