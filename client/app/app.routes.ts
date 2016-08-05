import { provideRouter, RouterConfig } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './+admin/admin.component';

const routes: RouterConfig = [
    { path: 'login', component: LoginComponent, useAsDefault:true },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'home', component: HomeComponent },
    { path: 'admin/:id', component: AdminComponent },
    { path: '**',redirectTo: '/login', pathMatch: 'full' }

];

export const appRouterProviders = [
    provideRouter(routes)
];