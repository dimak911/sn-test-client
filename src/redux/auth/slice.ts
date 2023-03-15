import {
  createAction,
  createSlice,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import {
  getProfileById,
  logout,
  signin,
  signup,
  verify,
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
      .addCase(signup.fulfilled, (state, action) => {
        return state;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isActivated = false;
        state.isLoggedOut = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoggedOut = false;
        state.isLoggedIn = true;
      })
      .addCase(verify.fulfilled, (state, action) => {
        state.isActivated = true;
      })
      .addCase(verify.rejected, (state, action) => {
        state.isActivated = false;
      })
      .addCase(getProfileById.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedOut = true;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
