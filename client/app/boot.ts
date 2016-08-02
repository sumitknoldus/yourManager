import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component.ts'
import { LoginComponent } from './login/login.component.ts'
import { appRouterProviders } from './app.routes.ts';
import { HTTP_PROVIDERS } from '@angular/http';


bootstrap(AppComponent, [
    appRouterProviders, HTTP_PROVIDERS
])
    .catch(err => console.error(err));