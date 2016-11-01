import { Routes, RouterModule } from '@angular/router';
import {LoginGuard} from "./login.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    canActivate: [LoginGuard],
    pathMatch: 'full'
  }
  //{
  //  path: 'home',
  //  loadChildren: 'app/home/home.module#HomeModule'},
  //
  //{
  //  path: 'admin',
  //  loadChildren: 'app/assets/admin.module#AssetModule'
  //},
  //{
  //  path: 'dashboard',
  //  loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  //}
  //{
  //  path: 'signup',
  //  loadChildren: 'app/signup/signup.module#SignupModule'
  //}
];
export const routing = RouterModule.forRoot(routes);

