import { provideStore } from '@ngrx/store';
import { reducers, initialValue } from './reducers';

export const STORE_PROVIDERS = [
  provideStore(reducers, initialValue)
];
