import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent} from './app';
import { environment} from './app';
import {HTTP_PROVIDERS} from '@angular/http';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);

