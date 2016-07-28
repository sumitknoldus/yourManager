import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component'
import { appRouterProviders } from './app/app.routes';

bootstrap(AppComponent, [
    appRouterProviders
])
    .catch(err => console.error(err));