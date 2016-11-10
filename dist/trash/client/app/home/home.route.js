var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var login_guard_1 = require('../login.guard');
var login_component_1 = require('../login/login.component');
var signup_component_1 = require('../signup/signup.component');
exports.homeRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        canActivate: [login_guard_1.LoginGuard],
        children: [
            {
                path: ''
            },
            {
                path: 'login',
                component: login_component_1.LoginComponent,
            },
            {
                path: 'signup',
                component: signup_component_1.SignupComponent,
            }
        ]
    }
];
exports.homeRouting = router_1.RouterModule.forChild(exports.homeRoutes);
//# sourceMappingURL=home.route.js.map