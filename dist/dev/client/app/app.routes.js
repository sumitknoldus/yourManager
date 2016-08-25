"use strict";
var router_1 = require('@angular/router');
var login_route_1 = require('./login/login.route');
var admin_route_1 = require('./+admin/admin.route');
var dashboard_route_1 = require('./dashboard/dashboard.route');
var home_route_1 = require('./home/home.route');
//import {AdminComponent} from "./+admin/admin.component";
//import {DashboardComponent} from "./dashboard/dashboard.component";
//import {HomeComponent} from "./home/home.component";
//import {LoginComponent} from "./login/login.component";
//const routes: RouterConfig = [
//    ...HomeRoutes,
//    ...AdminRoutes,
//    ...DashboardRoutes,
//    ...LoginRoutes,
//
//];
//
//export const appRouterProviders = [
//    provideRouter(routes)
//];
var routes = home_route_1.HomeRoutes.concat(admin_route_1.AdminRoutes, dashboard_route_1.DashboardRoutes, login_route_1.LoginRoutes);
exports.routing = router_1.RouterModule.forRoot(routes);

//# sourceMappingURL=app.routes.js.map
