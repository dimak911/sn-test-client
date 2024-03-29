import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () =>
  useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
