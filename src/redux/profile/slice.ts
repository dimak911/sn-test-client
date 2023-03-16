import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { getUserProfile, updateUserProfile } from './operations';
import { logout } from '../auth/operations';

export interface ProfileSliceState {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  description: string;
}

const initialState: ProfileSliceState = {
  id: 0,
  firstName: '',
  lastName: '',
  avatar: '',
  description: '',
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
