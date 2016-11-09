import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent }    from './login.component';
import {LoginGuard} from '../login.guard';

const loginRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
    }
    ,
    {
        path: '',
        redirectTo: '/login',
        canActivate: [LoginGuard],
        pathMatch: 'full'
    }
];
export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);
