import { combineReducers } from '@ngrx/store';

import { people } from '../party/reducers/people';
import { details } from '../party/reducers/details';

export const initialValue = {
  people: [],
  details: {}
};

export default combineReducers({
  people,
  details
});
