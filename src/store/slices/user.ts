import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, RequestStatus } from '../../components/const';
import { User } from '../../types/user';
import { checkAuth, login, logout } from '../thunks/auth';

type UserState = {
  info: User | null;
  requestStatus: RequestStatus;
  status: AuthorizationStatus;
};

const initialState: UserState = {
  info: null,
  requestStatus: RequestStatus.Idle,
  status: AuthorizationStatus.Unknown,
};

function processSuccess(state: UserState, action: PayloadAction<User>) {
  state.info = action.payload;
  state.status = AuthorizationStatus.Auth;
  state.requestStatus = RequestStatus.Success;
}

function processFailed(state: UserState) {
  state.status = AuthorizationStatus.NoAuth;
  state.requestStatus = RequestStatus.Failed;
}

function processLoading(state: UserState) {
  state.requestStatus = RequestStatus.Loading;
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, processSuccess)
      .addCase(checkAuth.rejected, processFailed)
      .addCase(checkAuth.pending, processLoading)
      .addCase(login.fulfilled, processSuccess)
      .addCase(login.rejected, processFailed)
      .addCase(login.pending, processLoading)
      .addCase(logout.fulfilled, (state: UserState) => {
        state.info = null;
        state.status = AuthorizationStatus.NoAuth;
      });
  },
  selectors: {
    userStatus: (state) => state.status,
    user: (state) => state.info,
  },
});

export const userSelectors = userSlice.selectors;
export const userActions = { checkAuth, login, logout };
