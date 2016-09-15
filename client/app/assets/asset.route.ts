import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AdminComponent } from './search-asset.component';
import {AddAssetComponent} from "./add-asset.component";
import {EditAssetComponent} from "./edit-asset.component";
import {SearchAssetResolve} from "./search-asset-resolve";
import {AssignAssetComponent} from "./assign-asset.component";
import {ListComponent} from "./list-asset.component";

const assetRoutes: Routes = [

    {
        path: 'admin/:id',
        component: AdminComponent,
        resolve: {
            assets: SearchAssetResolve
        }
    },
    {
        path: 'asset/add',
        component: AddAssetComponent,
        //outlet: 'asset'
    }, {
        path: 'asset/assign',
        component: AssignAssetComponent,
    }, {
        path: 'asset/edit/:id',
        component: EditAssetComponent,
        //outlet: 'asset'
    },
    {
        path: 'asset/list',
        component: ListComponent
        //outlet: 'asset'
    }
];
export const assetRouting: ModuleWithProviders = RouterModule.forChild(assetRoutes);


