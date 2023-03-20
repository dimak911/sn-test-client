import { RootState } from '../../app/store';

export const selectIsLoggedIn = (state: RootState) =>
  state.auth.isLoggedIn;
export const selectIsActivated = (state: RootState) =>
  state.auth.isActivated;
