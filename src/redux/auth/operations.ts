import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../http';

export interface ICreateUserPayload {
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
}

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials: ICreateUserPayload, { rejectWithValue }) => {
    try {
      const { data } = await $api.post('/user/signup', credentials);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signin = createAsyncThunk(
  'auth/signin',
  async (
    credentials: Omit<ICreateUserPayload, 'firstName'>,
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

export const verifyEmailToken = createAsyncThunk(
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
