"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
/* App root*/
var app_component_1 = require('./app.component');
/*
 @Feature Modules
 **/
var app_routes_1 = require('./app.routes');
var login_module_1 = require('./login/login.module');
var asset_module_1 = require('./assets/asset.module');
var home_module_1 = require('./home/home.module');
var dashboard_module_1 = require('./dashboard/dashboard.module');
var signup_module_1 = require('./signup/signup.module');
var admin_guard_1 = require('./admin.guard');
var user_guard_1 = require('./user.guard');
var login_guard_1 = require('./login.guard');
var admin_module_1 = require('./admin/admin.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routing,
                login_module_1.LoginModule,
                signup_module_1.SignupModule,
                dashboard_module_1.DashboardModule,
                home_module_1.HomeModule,
                asset_module_1.AssetModule,
                admin_module_1.AdminModule
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [login_guard_1.LoginGuard, user_guard_1.UserGuard, admin_guard_1.AdminGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
