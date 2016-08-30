import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  }

  ];
export const routing = RouterModule.forRoot(routes);

