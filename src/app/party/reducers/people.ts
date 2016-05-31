import { Action } from '@ngrx/store';
import {
  ADD_PERSON,
  ADD_GUEST,
  REMOVE_PERSON,
  REMOVE_GUEST,
  TOGGLE_ATTENDING,
  SHOW_ATTENDING
} from '../models/people';
import personReducer, { PersonState } from './person';
import filterReducer from './filter';

export interface PeopleState extends Array<PersonState> { }

const initialState: PeopleState = [];

export default (state = initialState, action: Action): PeopleState => {
  console.log('state: ', state);
  console.log('action: ', action);
  switch (action.type) {
    case ADD_PERSON:
      return [
        ...state,
        Object.assign({}, {
          id: action.payload.id,
          name: action.payload.name,
          guests: 0,
          attending: false
        })
      ];

    case REMOVE_PERSON:
      return state.filter(person => person.id !== action.payload);
    
    // to shorten our case statements, delegate detail updates to second private reducer
    case ADD_GUEST:
      return state.map(person => personReducer(person, action));

    case REMOVE_GUEST:
      return state.map(person => personReducer(person, action));

    case TOGGLE_ATTENDING:
      return filterReducer(state, action);

    case SHOW_ATTENDING:
      return state.map(person => person.attending);
    
    // always have default return of previous state when action is not relevant
    default:
      return state;
  }
};
