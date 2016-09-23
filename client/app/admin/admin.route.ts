import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {ListComponent} from "../assets/list-asset.component";
import {AdminGuard} from "../admin.guard";
import {ListAssetResolve} from "../assets/list-asset-resolve";
import {SearchAssetResolve} from "../assets/search-asset-resolve";
import {SearchAssetComponent} from "../assets/search-asset.component";
import {AssignAssetComponent} from "../assets/assign-asset.component";
import {AddAssetComponent} from "../assets/add-asset.component";
import {UserResolve} from "../assets/user-resolve";
import {UserComponent} from "../assets/user.component";
import {UserGuard} from "../user.guard";

const routes: Routes = [
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
        //outlet: 'asset'
      }, {
        path: 'asset/assign',
        canActivate: [AdminGuard],
        component: AssignAssetComponent,
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [UserGuard],
        resolve: {
          assets: UserResolve
        }
      },
    ]
  }
];
export const adminRouting = RouterModule.forChild(routes);

