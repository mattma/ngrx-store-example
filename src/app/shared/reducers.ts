import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';

import { people } from '../party/reducers/people';
import { details } from '../party/reducers/details';
import { filter } from '../party/reducers/filter';

/**
 * each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface AppState {
  // router: RouterState;
  // search: fromSearch.SearchState;
  // books: fromBooks.BooksState;
  // collection: fromCollection.CollectionState;
  people: Array<any>;
  details: Object;
}

export const initialValue = {
  people: [],
  details: {},
  filter: 'SHOW_ALL'
};

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export default compose(storeLogger(), combineReducers)({
  people,
  details,
  filter
});
