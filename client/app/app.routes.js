var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var home_component_1 = require('./home/home.component');
var routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    //{ path: 'hero/:id', component: HeroDetailComponent },
    { path: '**', component: dashboard_component_1.DashboardComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map