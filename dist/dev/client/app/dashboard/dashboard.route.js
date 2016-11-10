"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var admin_guard_1 = require('../admin.guard');
var dashboardRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [admin_guard_1.AdminGuard],
    }
];
exports.dashboardRouting = router_1.RouterModule.forChild(dashboardRoutes);

//# sourceMappingURL=dashboard.route.js.map
