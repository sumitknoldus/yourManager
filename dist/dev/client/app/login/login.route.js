"use strict";
var login_component_1 = require('./login.component');
exports.LoginRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

//# sourceMappingURL=login.route.js.map
