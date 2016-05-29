import { Component } from '@angular/core';
import { STORE_PROVIDERS } from './shared';
import { PartyComponent } from './party';

@Component({
  moduleId: module.id,
  selector: 'rxstore-app',
  directives: [PartyComponent],
  providers: [...STORE_PROVIDERS],
  template: `
    <app-party></app-party>
  `,
  styleUrls: ['rxstore.component.css']
})
export class RxstoreAppComponent { }
