import { RouterConfig } from '@angular/router';

import { LoginComponent } from './login.component';

export const LoginRoutes: RouterConfig = [

    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
];