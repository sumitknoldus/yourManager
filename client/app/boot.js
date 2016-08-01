var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_ts_1 = require('./app.component.ts');
var app_routes_ts_1 = require('./app.routes.ts');
platform_browser_dynamic_1.bootstrap(app_component_ts_1.AppComponent, [
    app_routes_ts_1.appRouterProviders
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=boot.js.map