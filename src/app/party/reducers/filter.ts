import { Action } from '@ngrx/store';
import {
  SHOW_ATTENDING,
  SHOW_ALL,
  SHOW_WITH_GUESTS
} from '../models/filter';

// return appropriate function depending on selected filter
export default (state, action: Action) => {
  console.log('state: ', state);
  switch (action.type) {
    case SHOW_ATTENDING:
      return state => state.attending;
    case SHOW_ALL:
      return state => state;
    case SHOW_WITH_GUESTS:
      return state => state.guests;
    default:
      return state;
  }
};
