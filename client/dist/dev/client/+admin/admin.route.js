var router_1 = require('@angular/router');
var adminRoutes = [
    {
        path: 'heroes',
        loadChildren: 'admin.module#AdminModule'
    }
];
exports.adminRouting = router_1.RouterModule.forChild(adminRoutes);
//# sourceMappingURL=admin.route.js.map