"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'login', component: login_component_1.LoginComponent },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map