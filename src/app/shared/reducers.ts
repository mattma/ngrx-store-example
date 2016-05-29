import { combineReducers } from '@ngrx/store';

import { people } from '../party/reducers/people';
import { details } from '../party/reducers/details';

export const initialValue = {
  people: [],
  details: {}
};

export const reducers = combineReducers({
  people,
  details
});
