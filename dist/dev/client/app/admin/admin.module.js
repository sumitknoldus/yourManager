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
var http_1 = require('@angular/http');
var admin_component_1 = require("./admin.component");
var admin_route_1 = require("./admin.route");
var shared_module_1 = require("../shared/shared.module");
var header_component_1 = require("./header.component");
var sidebar_component_1 = require("./sidebar.component");
var new_employee_component_1 = require("../assets/new-employee.component");
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [admin_route_1.adminRouting, shared_module_1.SharedModule, http_1.HttpModule],
            declarations: [admin_component_1.AdminComponent, header_component_1.HeaderComponent, sidebar_component_1.SidebarComponent, new_employee_component_1.NewEmployeeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;

//# sourceMappingURL=admin.module.js.map
