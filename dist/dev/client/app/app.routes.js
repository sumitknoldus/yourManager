"use strict";
var router_1 = require('@angular/router');
//import {loginRouting} from './login/login.route';
//import {AdminRoutes} from './+admin/admin.route';
//import {DashboardRoutes} from './dashboard/dashboard.route';
//import {HomeRoutes} from './home/home.route';
var routes = [
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'admin', loadChildren: 'app/+admin/admin.module#AdminModule' },
    {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);

//# sourceMappingURL=app.routes.js.map
