import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSchema } from '../shared/state.model';
import { PersonInput } from './person-input.component';
import { PersonList } from './person-list.component';
import {
  ADD_PERSON,
  ADD_GUEST,
  REMOVE_GUEST,
  REMOVE_PERSON,
  TOGGLE_ATTENDING
} from './models/people';

@Component({
  moduleId: module.id,
  selector: 'app-party',
  directives: [PersonInput, PersonList],
  template: `
    <h3>@ngrx/store Party Planner</h3>
    
    <person-input (addPerson)="addPerson($event)">
    </person-input>
    
    <person-list
      [people]="people"
      (addGuest)="addGuest($event)"
      (removeGuest)="removeGuest($event)"
      (removePerson)="removePerson($event)"
      (toggleAttending)="toggleAttending($event)"
      >
    </person-list>
  `
})
export class PartyComponent {
  public people;
  private subscription;

  constructor(private store: Store<AppSchema>) {
    this.subscription = store.select('people')
      .subscribe(people => this.people = people);

    console.log('this.people: ', this.people);
  }

  addPerson (name) {
    this.store.dispatch({
      type: ADD_PERSON,
      payload: { id: name, name }
    });
  }

  addGuest (id) {
    this.store.dispatch({
      type: ADD_GUEST,
      payload: id
    });
  }

  removeGuest (id) {
    this.store.dispatch({
      type: REMOVE_GUEST,
      payload: id
    });
  }

  removePerson (id) {
    this.store.dispatch({
      type: REMOVE_PERSON,
      payload: id
    });
  }

  toggleAttending (id) {
    this.store.dispatch({
      type: TOGGLE_ATTENDING,
      payload: id
    });
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}
