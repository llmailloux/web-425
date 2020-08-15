/**
 * Title: main.ts
 * Author: Professor Krasso
 * Modified by: Laurie Mailloux
 * Date: 8/12/2020
 * Description: main
 */


import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
