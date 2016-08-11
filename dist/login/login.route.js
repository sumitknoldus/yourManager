"use strict";
var login_component_1 = require('./login.component');
exports.LoginRoutes = [
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
];
//# sourceMappingURL=login.route.js.map