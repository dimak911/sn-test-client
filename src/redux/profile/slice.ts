import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { getUserProfile, updateUserProfile } from './operations';
import { logout } from '../auth/operations';

export interface ProfileSliceState {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  avatar: string | null;
  description: string | null;
}

const initialState: ProfileSliceState = {
  id: null,
  firstName: null,
  lastName: null,
  avatar: null,
  description: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {} as SliceCaseReducers<ProfileSliceState>,
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.fulfilled, (state, { payload }) => {
        state.id = payload.id;
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
        state.avatar = payload.avatar;
        state.description = payload.description;
      })
      .addCase(logout.fulfilled, (state) => {
        state.id = initialState.id;
        state.firstName = initialState.firstName;
        state.lastName = initialState.lastName;
        state.avatar = initialState.avatar;
        state.description = initialState.description;
      })
      .addCase(updateUserProfile.fulfilled, (state, { payload }) => {
        state.id = payload.id;
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
        state.avatar = payload.avatar;
        state.description = payload.description;
      });
  },
});

export const profileReducer = profileSlice.reducer;
