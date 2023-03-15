import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../http';

export interface IPayload {
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
}

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials: IPayload, { rejectWithValue }) => {
    try {
      const { data } = await $api.post('/auth/signup', credentials);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signin = createAsyncThunk(
  'auth/signin',
  async (
    credentials: Omit<IPayload, 'firstName'>,
    { rejectWithValue }
  ) => {
    try {
      const response = await $api.post('/auth/login', credentials);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const verify = createAsyncThunk(
  'auth/verify',
  async (token: string, { rejectWithValue }) => {
    try {
      const { data } = await $api.patch(`/user/verify/${token}`);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await $api.post(`/auth/logout`);
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProfileById = createAsyncThunk(
  'profile/getProfileById',
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await $api.get(`/profile/${id}`);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
