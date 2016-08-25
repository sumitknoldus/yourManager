import { Routes, RouterModule } from '@angular/router';
import {LoginRoutes} from './login/login.route';
import {AdminRoutes} from './+admin/admin.route';
import {DashboardRoutes} from './dashboard/dashboard.route';
import {HomeRoutes} from './home/home.route';
//import {AdminComponent} from "./+admin/admin.component";
//import {DashboardComponent} from "./dashboard/dashboard.component";
//import {HomeComponent} from "./home/home.component";
//import {LoginComponent} from "./login/login.component";

//const routes: RouterConfig = [
//    ...HomeRoutes,
//    ...AdminRoutes,
//    ...DashboardRoutes,
//    ...LoginRoutes,
//
//];
//
//export const appRouterProviders = [
//    provideRouter(routes)
//];

const routes: Routes = [

    ...HomeRoutes,
  ...AdminRoutes,
  ...DashboardRoutes,
  ...LoginRoutes

  ];
export const routing = RouterModule.forRoot(routes);

