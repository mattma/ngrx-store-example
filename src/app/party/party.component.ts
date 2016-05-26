import { Component, OnDestroy } from "@angular/core";
import { Store } from '@ngrx/store';

import { PersonInput } from "./person-input.component.ts";
import { PersonList } from "./person-list.component.ts";
import {
  ADD_PERSON, ADD_GUEST, REMOVE_GUEST, REMOVE_PERSON,
  TOGGLE_ATTENDING
} from "./models/people";

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
  `,
  styles: []
})
export class PartyComponent implements OnDestroy {
  public people;
  private subscription;

  constructor(private store: Store) {
    this.subscription = this.store
      .select('people')
      .subscribe(people => this.people = people);
  }

  addPerson (name) {
    this.store.dispatch({
      type: ADD_PERSON,
      payload: { id: id(), name }
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
