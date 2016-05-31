import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppSchema } from '../shared/state.model';
import { PersonInput } from './person-input.component';
import { PersonList } from './person-list.component';
import { FilterSelect } from './party-filter.component';
import {
  ADD_PERSON,
  ADD_GUEST,
  REMOVE_GUEST,
  REMOVE_PERSON,
  TOGGLE_ATTENDING
} from './models/people';
import 'rxjs/add/operator/combineLatest';

@Component({
  moduleId: module.id,
  selector: 'app-party',
  directives: [PersonInput, PersonList, FilterSelect],
  template: `
    <h3>@ngrx/store Party Planner</h3>
    <!--<party-stats-->
      <!--[invited]="(people | async)?.length"-->
      <!--[attending]="(attending | async)?.length"-->
      <!--[guests]="(guests | async)">-->
    <!--</party-stats>-->

    <filter-select (updateFilter)="updateFilter($event)">
    </filter-select>
    
    <person-input (addPerson)="addPerson($event)">
    </person-input>
    
    <person-list
      [people]="people | async"
      [filter]="filter | async"
      (addGuest)="addGuest($event)"
      (removeGuest)="removeGuest($event)"
      (removePerson)="removePerson($event)"
      (toggleAttending)="toggleAttending($event)"
      >
    </person-list>
  `
})
export class PartyComponent {
  public people: Observable<Array<any>>;
  filter: Observable<any>;
  // attending: boolean;
  // guests: any;
  // total: number;
  model: any;

  constructor (private store: Store<AppSchema>) {
    this.people = store.select('people');
    this.filter = store.select('filter');

    /*    this.model = this.people
     .combineLatest(
     this.filter,
     (people, filter) => {
     console.log('people: ', people);
     console.log('filter: ', filter);
     // this.people = people;
     // this.filter = filter;
     // total: people.length,
     // people: people
     // attending: people.filter(person => person.attending).length,
     // guests: people.reduce((acc, curr) => acc + curr.guests, 0)
     }
     );*/
  }

  addPerson (name: string) {
    this.store.dispatch({
      type: ADD_PERSON,
      // @TODO: replace name with `id: id()`
      payload: { id: name, name }
    });
  }

  addGuest (id) {
    this.store.dispatch({ type: ADD_GUEST, payload: id });
  }

  removeGuest (id) {
    this.store.dispatch({ type: REMOVE_GUEST, payload: id });
  }

  removePerson (id) {
    this.store.dispatch({ type: REMOVE_PERSON, payload: id });
  }

  toggleAttending (id) {
    this.store.dispatch({ type: TOGGLE_ATTENDING, payload: id });
  }

  updateFilter (filter: string) {
    this.store.dispatch({ type: filter });
  }
}
