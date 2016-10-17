import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {ListComponent} from "../assets/list-asset.component";
import {AdminGuard} from "../admin.guard";
import {ListAssetResolve} from "../assets/list-asset-resolve";
import {SearchAssetResolve} from "../assets/search-asset-resolve";
import {SearchAssetComponent} from "../assets/search-asset.component";
import {AssignAssetComponent} from "../assets/assign-asset.component";
import {AddAssetComponent} from "../assets/add-asset.component";
import {UserComponent} from "../assets/user.component";
import {UserGuard} from "../user.guard";
//import {NewUserComponent} from "../assets/new-employee.component";
import {EditAssetComponent} from "../assets/edit-asset.component";
import {NewEmployeeComponent} from "../assets/new-employee.component";
import {ListNewAssetResolve} from "../assets/list-new-asset-resolve";
import {ListNewAssetComponent} from "../assets/list-new-asset.component";

const routes:Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'asset/list',
                component: ListComponent,
                canActivate: [AdminGuard],
                resolve: {
                    assets: ListAssetResolve
                }
            },
            {
                path: 'asset/list-new',
                component: ListNewAssetComponent,
                canActivate: [AdminGuard],
                resolve: {
                    assets: ListNewAssetResolve
                }
            },
            {
                path: 'admin/:id',
                component: SearchAssetComponent,
                canActivate: [AdminGuard],
                resolve: {
                    assets: SearchAssetResolve
                }
            },
            {
                path: 'asset/add',
                component: AddAssetComponent,
                canActivate: [AdminGuard],

            },
            {
                path: 'asset/edit/:id',
                canActivate: [AdminGuard],
                component: EditAssetComponent,

            },
            {
                path: 'asset/assign',
                canActivate: [AdminGuard],
                component: AssignAssetComponent,
            },
            {
                path: 'asset/assign/:assetCode',
                canActivate: [AdminGuard],
                component: AssignAssetComponent,
            },
            {
                path: 'new/emp',
                canActivate: [AdminGuard],
                component: NewEmployeeComponent,
            },
            {
                path: 'user',
                component: UserComponent,
                canActivate: [UserGuard]
            }
        ]
    }
];
export const adminRouting = RouterModule.forChild(routes);
