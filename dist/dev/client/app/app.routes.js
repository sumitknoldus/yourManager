"use strict";
var router_1 = require('@angular/router');
var login_route_1 = require('./login/login.route');
var admin_route_1 = require('./+admin/admin.route');
var dashboard_route_1 = require('./dashboard/dashboard.route');
var home_route_1 = require('./home/home.route');
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
var routes = login_route_1.LoginRoutes.concat(home_route_1.HomeRoutes, admin_route_1.AdminRoutes, dashboard_route_1.DashboardRoutes);
exports.routing = router_1.RouterModule.forRoot(routes);

//# sourceMappingURL=app.routes.js.map
