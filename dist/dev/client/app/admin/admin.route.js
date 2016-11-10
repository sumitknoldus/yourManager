"use strict";
var router_1 = require('@angular/router');
var admin_component_1 = require('./admin.component');
var list_asset_component_1 = require('../assets/list-asset.component');
var admin_guard_1 = require('../admin.guard');
var list_asset_resolve_1 = require('../assets/list-asset-resolve');
var search_asset_resolve_1 = require('../assets/search-asset-resolve');
var search_asset_component_1 = require('../assets/search-asset.component');
var assign_asset_component_1 = require('../assets/assign-asset.component');
var add_asset_component_1 = require('../assets/add-asset.component');
var user_component_1 = require('../assets/user.component');
var user_guard_1 = require('../user.guard');
//import {NewUserComponent} from '../assets/new-employee.component';
var edit_asset_component_1 = require('../assets/edit-asset.component');
var new_employee_component_1 = require('../assets/new-employee.component');
var list_new_asset_resolve_1 = require('../assets/list-new-asset-resolve');
var list_new_asset_component_1 = require('../assets/list-new-asset.component');
var asset_assign_resolve_1 = require('../assets/asset-assign-resolve');
var routes = [
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        children: [
            {
                path: 'asset/list',
                component: list_asset_component_1.ListComponent,
                canActivate: [admin_guard_1.AdminGuard],
                resolve: {
                    assets: list_asset_resolve_1.ListAssetResolve
                }
            },
            {
                path: 'asset/list-new',
                component: list_new_asset_component_1.ListNewAssetComponent,
                canActivate: [admin_guard_1.AdminGuard],
                resolve: {
                    assets: list_new_asset_resolve_1.ListNewAssetResolve
                }
            },
            {
                path: 'admin/:id',
                component: search_asset_component_1.SearchAssetComponent,
                canActivate: [admin_guard_1.AdminGuard],
                resolve: {
                    assets: search_asset_resolve_1.SearchAssetResolve
                }
            },
            {
                path: 'asset/add',
                component: add_asset_component_1.AddAssetComponent,
                canActivate: [admin_guard_1.AdminGuard],
            },
            {
                path: 'asset/edit/:id',
                canActivate: [admin_guard_1.AdminGuard],
                component: edit_asset_component_1.EditAssetComponent,
            },
            {
                path: 'asset/assign',
                canActivate: [admin_guard_1.AdminGuard],
                component: assign_asset_component_1.AssignAssetComponent,
                resolve: {
                    assets: asset_assign_resolve_1.AssignAssetResolve
                }
            },
            {
                path: 'asset/assign/:assetCode',
                canActivate: [admin_guard_1.AdminGuard],
                component: assign_asset_component_1.AssignAssetComponent,
                resolve: {
                    assets: asset_assign_resolve_1.AssignAssetResolve
                }
            },
            {
                path: 'new/emp',
                canActivate: [admin_guard_1.AdminGuard],
                component: new_employee_component_1.NewEmployeeComponent,
            },
            {
                path: 'user',
                component: user_component_1.UserComponent,
                canActivate: [user_guard_1.UserGuard]
            }
        ]
    }
];
exports.adminRouting = router_1.RouterModule.forChild(routes);

//# sourceMappingURL=admin.route.js.map
