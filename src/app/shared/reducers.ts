import { combineReducers } from '@ngrx/store';

import { people } from '../party/reducers/people';
import { details } from '../party/reducers/details';
import { filter } from '../party/reducers/filter';

export const initialValue = {
  people: [],
  details: {},
  filter: 'SHOW_ALL'
};

export const reducers = combineReducers({
  people,
  details,
  filter
});
