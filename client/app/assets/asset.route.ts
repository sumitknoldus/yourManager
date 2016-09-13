import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AdminComponent } from './search-asset.component';
import {AddAssetComponent} from "./add-asset.component";
import {EditAssetComponent} from "./edit-asset.component";

const assetRoutes: Routes = [

    {
        path: 'admin/:id',
        component: AdminComponent
    },
    {
        path: 'hardware/add',
        component: AddAssetComponent,
        //outlet: 'asset'
    }, {
        path: 'hardware/edit/:id',
        component: EditAssetComponent,
        //outlet: 'asset'
    }
];
export const assetRouting: ModuleWithProviders = RouterModule.forChild(assetRoutes);


