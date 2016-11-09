import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {LoginGuard} from '../login.guard';
import {LoginComponent} from '../login/login.component';
import {SignupComponent} from '../signup/signup.component';


export const homeRoutes: Routes = [
    {
        path: 'home',
        component : HomeComponent,
        canActivate: [LoginGuard],
        children : [
            {
                path: ''
            },
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'signup',
                component: SignupComponent,
            }
        ]
    }
];

export const homeRouting = RouterModule.forChild(homeRoutes);
