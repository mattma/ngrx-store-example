import { Component, Output, EventEmitter } from '@angular/core';
import {
  SHOW_ATTENDING,
  SHOW_ALL,
  SHOW_WITH_GUESTS
} from './models/filter';

@Component({
  selector: 'filter-select',
  template: `
    <div class="margin-bottom-10">
      <select #selectList (change)="updateFilter.emit(selectList.value)">
        <option *ngFor="let filter of filters" value="{{filter.action}}">
          {{filter.friendly}}
        </option>
      </select>
    </div>
    `
})
export class FilterSelect {
  @Output() updateFilter: EventEmitter<string> = new EventEmitter<string>();
  
  public filters = [
    { friendly: "All", action: SHOW_ALL },
    { friendly: "Attending", action: SHOW_ATTENDING },
    { friendly: "Attending w/ Guests", action: SHOW_WITH_GUESTS }
  ];
}