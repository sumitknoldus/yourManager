import { provideRouter, RouterConfig } from '@angular/router';
import {LoginRoutes} from './login/login.route';
import {AdminRoutes} from './+admin/admin.route';
import {DashboardRoutes} from './dashboard/dashboard.route';
import {HomeRoutes} from './home/home.route';

const routes: RouterConfig = [
    ...AdminRoutes,
    ...DashboardRoutes,
    ...LoginRoutes,
    ...HomeRoutes
];

export const appRouterProviders = [
    provideRouter(routes)
];