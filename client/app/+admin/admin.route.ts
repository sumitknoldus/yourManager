import { RouterConfig } from '@angular/router';

import { AdminComponent } from './admin.component';

export const AdminRoutes: RouterConfig = [

    {
        path: 'admin/:id',
        component: AdminComponent
    },
];