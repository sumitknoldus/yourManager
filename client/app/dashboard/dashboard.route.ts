import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DashboardComponent }    from './dashboard.component';
import {AdminGuard} from '../admin.guard';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AdminGuard],
    }
];
export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
