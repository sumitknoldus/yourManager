import { Routes, RouterModule } from '@angular/router';
//import {loginRouting} from './login/login.route';
//import {AdminRoutes} from './+admin/admin.route';
//import {DashboardRoutes} from './dashboard/dashboard.route';
//import {HomeRoutes} from './home/home.route';


const routes: Routes = [
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    }
  //  ...HomeRoutes,
  //...AdminRoutes,
  //...DashboardRoutes,
  //...loginRouting

  ];
export const routing = RouterModule.forRoot(routes);

