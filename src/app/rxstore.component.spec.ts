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

  it('should have as title \'rxstore works!\'',
      inject([RxstoreAppComponent], (app: RxstoreAppComponent) => {
    expect(app.title).toEqual('rxstore works!');
  }));
});
