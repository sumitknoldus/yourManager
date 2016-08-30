import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'},

  {
    path: 'admin',
    loadChildren: '+admin/admin.module#AdminModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'dashboard/dashboard.module#DashboardModule'
  }
];
export const routing = RouterModule.forRoot(routes);

