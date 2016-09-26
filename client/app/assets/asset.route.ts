import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { SearchAssetComponent } from './search-asset.component';
import {AddAssetComponent} from "./add-asset.component";
import {EditAssetComponent} from "./edit-asset.component";
import {SearchAssetResolve} from "./search-asset-resolve";
import {AssignAssetComponent} from "./assign-asset.component";
import {ListComponent} from "./list-asset.component";
import {ListAssetResolve} from "./list-asset-resolve";
import {UserComponent} from "./user.component";
import {UserResolve} from "./user-resolve";
import {AdminGuard} from "../admin.guard";
import {UserGuard} from "../user.guard";

const assetRoutes: Routes = [

    //{
    //    path: 'admin/:id',
    //    component: SearchAssetComponent,
    //    canActivate: [AdminGuard],
    //    resolve: {
    //        assets: SearchAssetResolve
    //    }
    //},
    //{
    //    path: 'user',
    //    component: UserComponent,
    //    canActivate: [UserGuard],
    //    resolve: {
    //        assets: UserResolve
    //    }
    //},
    //{
    //    path: 'asset/add',
    //    component: AddAssetComponent,
    //    canActivate: [AdminGuard],
    //    //outlet: 'asset'
    //}, {
    //    path: 'asset/assign',
    //    canActivate: [AdminGuard],
    //    component: AssignAssetComponent,
    //},

    //{
    //    path: 'asset/list',
    //    component: ListComponent,
    //    canActivate: [AdminGuard],
    //    resolve: {
    //        assets: ListAssetResolve
    //    }
    //}
];
export const assetRouting: ModuleWithProviders = RouterModule.forChild(assetRoutes);


