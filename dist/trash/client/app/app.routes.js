var router_1 = require('@angular/router');
var login_guard_1 = require("./login.guard");
var routes = [
    {
        path: '',
        redirectTo: '/home',
        canActivate: [login_guard_1.LoginGuard],
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map