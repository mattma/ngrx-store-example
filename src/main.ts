import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { STORE_PROVIDERS } from './app/shared';

import { RxstoreAppComponent, environment } from './app';

if (environment.production) {
  enableProdMode();
}

bootstrap(RxstoreAppComponent, [
  ...STORE_PROVIDERS
]);
