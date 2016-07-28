import { provideRouter, RouterConfig } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: RouterConfig = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    //{ path: 'hero/:id', component: HeroDetailComponent },
    //{ path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];