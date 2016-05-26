import {
  ADD_GUEST,
  REMOVE_GUEST,
  TOGGLE_ATTENDING
} from '../planner/models/people';

export const details = (state, action) => {
  switch (action.type) {
    case ADD_GUEST:
      if (state.id === action.payload) {
        return Object.assign({}, state, { guests: state.guests + 1 });
      }
      return state;

    case REMOVE_GUEST:
      if(state.id === action.payload){
        return Object.assign({}, state, {guests: state.guests - 1});
      }
      return state;

    case TOGGLE_ATTENDING:
      if(state.id === action.payload){
        return Object.assign({}, state, {attending: !state.attending});
      }
      return state;

    default:
      return state;
  }
}