import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

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


