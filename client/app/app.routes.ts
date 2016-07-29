import { provideRouter, RouterConfig } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';

const routes: RouterConfig = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    //{ path: 'hero/:id', component: HeroDetailComponent },
    { path: '**', component: DashboardComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];