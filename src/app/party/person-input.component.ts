import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'person-input',
  template: `
    <input #personName type="text" />
    <button (click)="add(personName)">Add Person</button>
  `
})
export class PersonInput {
  @Output() addPerson = new EventEmitter<string>();

  add (personName) {
    this.addPerson.emit(personName.value);
    personName.value = '';
  }
}
