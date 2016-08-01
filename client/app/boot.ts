import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component.ts'
import { LoginComponent } from './login/login.component.ts'
import { appRouterProviders } from './app.routes.ts';

bootstrap(AppComponent, [
    appRouterProviders
])
    .catch(err => console.error(err));