import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AdminComponent } from './search-asset.component';
import {AddAssetComponent} from "./add-asset.component";
import {EditAssetComponent} from "./edit-asset.component";
import {SearchAssetResolve} from "./search-asset-resolve";

const assetRoutes: Routes = [

    {
        path: 'admin/:id',
        component: AdminComponent,
        resolve: {
            assets: SearchAssetResolve
        }
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


