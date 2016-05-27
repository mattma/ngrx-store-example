import {
  ADD_PERSON,
  ADD_GUEST,
  REMOVE_PERSON,
  REMOVE_GUEST,
  TOGGLE_ATTENDING
} from '../models/people';

import { details } from './details';

export const people = (state = [], action) => {
  switch(action.type){
    case ADD_PERSON:
      return [
        ...state,
        Object.assign({}, {id: action.payload.id, name: action.payload.name, guests:0, attending: false})
      ];

    case REMOVE_PERSON:
      return state
        .filter(person => person.id !== action.payload);
    //to shorten our case statements, delegate detail updates to second private reducer
    case ADD_GUEST:
      return state.map(person => details(person, action));

    case REMOVE_GUEST:
      return state.map(person => details(person, action));

    case TOGGLE_ATTENDING:
      return state.map(person => details(person, action));
    //always have default return of previous state when action is not relevant
    default:
      return state;
  }
};