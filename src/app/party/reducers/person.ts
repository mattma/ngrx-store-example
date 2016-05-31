import { Action } from '@ngrx/store';
import {
  ADD_GUEST,
  REMOVE_GUEST,
  TOGGLE_ATTENDING
} from '../models/people';

export interface PersonState {
  id?: string;
  name?: string;
  guests?: number;
  attending?: boolean;
};

const initialState: PersonState = { };

export default (state: PersonState = initialState, action: Action): PersonState => {
  switch (action.type) {
    case ADD_GUEST:
      if (state.id === action.payload) {
        return Object.assign({}, state, { guests: state.guests + 1 });
      }
      return state;

    case REMOVE_GUEST:
      if (state.id === action.payload) {
        return Object.assign({}, state, { guests: state.guests - 1 });
      }
      return state;

    case TOGGLE_ATTENDING:
      if (state.id === action.payload) {
        return Object.assign({}, state, { attending: !state.attending });
      }
      return state;

    default:
      return state;
  }
};
