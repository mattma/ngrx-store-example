import { provideStore } from '@ngrx/store';
import combineReducers, { initialValue } from './reducers';

export const STORE_PROVIDERS = [
  provideStore(combineReducers, initialValue)
];
