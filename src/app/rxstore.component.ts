import { Component } from '@angular/core';

import { PartyComponent } from './party';

@Component({
  moduleId: module.id,
  selector: 'rxstore-app',
  directives: [PartyComponent],
  template: `
    <h1>{{title}}</h1>
    <app-party></app-party>
  `,
  styleUrls: ['rxstore.component.css']
})
export class RxstoreAppComponent {
  title = 'rxstore works!';
}
