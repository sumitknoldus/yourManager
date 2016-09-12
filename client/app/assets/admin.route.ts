import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import {AddHardwareComponent} from "./add-hardware.component";

const adminRoutes: Routes = [

    {
        path: 'admin/:id',
        component: AdminComponent
    },
    {
        path: 'hardware/add',
        component: AddHardwareComponent,
        //outlet: 'asset'
    }
];
export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);


