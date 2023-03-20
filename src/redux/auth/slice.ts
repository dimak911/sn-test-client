import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import {
  logout,
  signin,
  signup,
  verifyEmailToken,
} from './operations';

export interface SliceState {
  isLoggedIn: boolean;
  isActivated: boolean;
  isLoggedOut: boolean;
}

const initialState: SliceState = {
  isLoggedIn: false,
  isActivated: false,
  isLoggedOut: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {} as SliceCaseReducers<SliceState>,
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state) => {
        return state;
      })
      .addCase(signup.rejected, (state) => {
        state.isLoggedIn = false;
        state.isActivated = false;
        state.isLoggedOut = true;
      })
      .addCase(signin.fulfilled, (state) => {
        state.isLoggedOut = false;
        state.isLoggedIn = true;
      })
      .addCase(verifyEmailToken.fulfilled, (state) => {
        state.isActivated = true;
      })
      .addCase(verifyEmailToken.rejected, (state) => {
        state.isActivated = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedOut = true;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
