import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {AdminGuard} from '../admin.guard';

export const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AdminGuard],
    }
];

export const homeRouting = RouterModule.forChild(homeRoutes);
