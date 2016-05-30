import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RxstoreAppComponent } from '../app/rxstore.component';

beforeEachProviders(() => [RxstoreAppComponent]);

describe('App: Rxstore', () => {
  it('should create the app',
      inject([RxstoreAppComponent], (app: RxstoreAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
