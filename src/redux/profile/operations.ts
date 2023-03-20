import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../http';
import { ProfileSliceState } from './slice';

export const getUserProfile = createAsyncThunk(
  'profile/getUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $api.get('/profile');

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'profile/updateUserProfile',
  async (profileData: ProfileSliceState, { rejectWithValue }) => {
    try {
      const { data } = await $api.patch('/profile', profileData);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUserProfileAvatar = createAsyncThunk(
  'profile/updateUserProfileAvatar',
  async (file: File, { rejectWithValue }) => {
    try {
      const { data } = await $api.post(
        '/profile/avatar',
        { file },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
