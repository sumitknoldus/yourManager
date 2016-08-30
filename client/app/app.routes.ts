import { Routes, RouterModule } from '@angular/router';
//import {loginRouting} from './login/login.route';
//import {AdminRoutes} from './+admin/admin.route';
//import {DashboardRoutes} from './dashboard/dashboard.route';
//import {HomeRoutes} from './home/home.route';


const routes: Routes = [
  { path: 'home',loadChildren: 'app/home/home.module#HomeModule'},
  { path: 'admin', loadChildren: 'app/+admin/admin.module#AdminModule' },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  }
];
export const routing = RouterModule.forRoot(routes);

