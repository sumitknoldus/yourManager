var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var home_component_1 = require('./home/home.component');
var admin_component_1 = require('./+admin/admin.component');
var routes = [
    { path: 'login', component: login_component_1.LoginComponent, useAsDefault: true },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'admin/:id', component: admin_component_1.AdminComponent },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map