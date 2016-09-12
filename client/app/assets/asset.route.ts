import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AdminComponent } from './search-asset.component';
import {AddHardwareComponent} from "./add-asset.component";

const assetRoutes: Routes = [

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
export const assetRouting: ModuleWithProviders = RouterModule.forChild(assetRoutes);


